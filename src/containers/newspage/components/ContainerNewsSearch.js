import React, { startTransition, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import slugify from "react-slugify";
import ComponentWaitLoad from "../../../components/loading/ComponentWaitLoad";
import Loading from "../../../components/loading/Loading";
import blank_avatar from "../../../assets/profile/blank_avatar.webp";
import {
     NEWSCOMMENT,
     NEWSLIST,
     NOTIFY_ADD,
} from "../../../common/context/reducer/actions";
import "./component_style.css";

const ContainerNewsSearch = () => {
     const search = useParams();
     const OutletContext = useOutletContext();
     const list_news = OutletContext.list_news;
     const account = OutletContext.account;
     const notify_for_user = OutletContext.notify_for_user;
     const dispatch = OutletContext.dispatch;

     const [indexNews, setIndexNews] = useState(null);

     const [news, setNews] = useState(null);

     const [isLoading, setIsLoading] = useState(false);
     const [content_comment, setContent_comment] = useState("");

     useEffect(() => {
          if (search.search && list_news) {
               console.log(search.search);
               const find_index_news = list_news.findIndex((item) => {
                    const title = slugify(item.title, {
                         lower: true,
                         strict: true,
                         locale: "vn",
                    });
                    return title.includes(search.search) === true;
               });
               if (find_index_news !== -1) {
                    setTimeout(() => {
                         setNews(list_news[find_index_news]);
                         startTransition(() => {
                              setIndexNews(list_news[find_index_news].id);
                         });
                    }, 1000);
               }
          }
     }, [list_news, search.search]);

     const handleOpenNewApp = (target) => {
          window.open(`https://${target}.com`);
     };

     const handleSendComment = () => {
          // setIsLoading(true);
          // if (!account) {
          //      setTimeout(() => {
          //           setIsLoading(false);
          //           dispatch(
          //                NOTIFY_ADD({
          //                     id: notify_for_user.length * 10,
          //                     type: "error",
          //                     message: "Bạn cần đăng nhập để bình luận.",
          //                })
          //           );
          //      }, 1000);
          //      return;
          // }
          // if (content_comment !== "") {
          //      fetch("/api/news/comment", {
          //           method: "post",
          //           body: JSON.stringify({
          //                user_comment: {
          //                     user_ID: account.user_ID,
          //                     avatar: account.user_avatar
          //                          ? account.user_avatar
          //                          : null,
          //                     user_name: account.user_name,
          //                     comment: content_comment,
          //                     like: 0,
          //                },
          //                id: indexNews,
          //           }),
          //      })
          //           .then((res) => res.json())
          //           .then((res) => {
          //                dispatch(NEWSLIST(res));
          //           });
          //      setContent_comment("");
          //      setIsLoading(false);
          // } else {
          //      setTimeout(() => {
          //           setIsLoading(false);
          //           dispatch(
          //                NOTIFY_ADD({
          //                     id: notify_for_user.length * 10,
          //                     type: "error",
          //                     message: "Bạn cần nhập nội dung bình luận.",
          //                })
          //           );
          //      }, 1000);
          // }
          setIsLoading(true);
          if (!account) {
               setTimeout(() => {
                    setIsLoading(false);
                    dispatch(
                         NOTIFY_ADD({
                              id: notify_for_user.length * 10,
                              type: "error",
                              message: "Bạn cần đăng nhập để bình luận.",
                         })
                    );
               }, 1000);
               return;
          }
          if (content_comment !== "") {
               const payload = {
                    user_comment: {
                         user_ID: account.user_ID,
                         avatar: account.user_avatar
                              ? account.user_avatar
                              : null,
                         user_name: account.user_name,
                         comment: content_comment,
                         like: 0,
                    },
                    id: indexNews,
               };
               dispatch(NEWSCOMMENT(payload));
               setContent_comment("");
               setIsLoading(false);
          } else {
               setTimeout(() => {
                    setIsLoading(false);
                    dispatch(
                         NOTIFY_ADD({
                              id: notify_for_user.length * 10,
                              type: "error",
                              message: "Bạn cần nhập nội dung bình luận.",
                         })
                    );
               }, 1000);
          }
     };

     return (
          <React.Fragment>
               {isLoading && <Loading />}
               {news ? (
                    <React.Fragment>
                         <div className="news-search">
                              <p className="news_title">{news.title}</p>
                              <p className="news_date">
                                   <span>
                                        <i className="fa-regular fa-clock"></i>
                                   </span>
                                   {news.date}
                              </p>
                              <p
                                   className="news_content"
                                   dangerouslySetInnerHTML={{
                                        __html: news.content,
                                   }}
                              ></p>
                         </div>
                         <div className="other-comment">
                              <p className="title">
                                   Bình luận từ những người dùng khác:{" "}
                              </p>
                              {news.comments.map((comment, index) => {
                                   return (
                                        <div
                                             key={index}
                                             className="user_comment"
                                        >
                                             <div className="">
                                                  <img
                                                       src={
                                                            comment.avatar
                                                                 ? comment.avatar
                                                                 : blank_avatar
                                                       }
                                                       alt=""
                                                  />
                                             </div>
                                             <div className="comment">
                                                  <p className="font-semibold">
                                                       {comment.user_name}
                                                  </p>
                                                  <p>{comment.comment}</p>
                                                  <span className="flex items-center">
                                                       {comment.like > 0 ? (
                                                            <React.Fragment>
                                                                 <p>
                                                                      {
                                                                           comment.like
                                                                      }
                                                                 </p>
                                                                 <i className="fa-solid fa-heart ml-1 text-red-500"></i>
                                                            </React.Fragment>
                                                       ) : (
                                                            <i className="fa-regular fa-heart"></i>
                                                       )}
                                                  </span>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>
                    </React.Fragment>
               ) : (
                    <ComponentWaitLoad />
               )}
               <div className="share_comment">
                    <div className="share">
                         <p>
                              Chia sẻ:{" "}
                              <i
                                   className="fa-brands fa-facebook"
                                   onClick={() => handleOpenNewApp("facebook")}
                              ></i>
                              <i
                                   className="fa-brands fa-google"
                                   onClick={() => handleOpenNewApp("google")}
                              ></i>
                              <i
                                   className="fa-brands fa-instagram"
                                   onClick={() => handleOpenNewApp("instagram")}
                              ></i>
                         </p>
                    </div>
                    <div className="comment">
                         <p className="title">
                              Gửi ý kiến của bạn cho chúng tôi
                         </p>
                         <div className="form-comment">
                              <textarea
                                   placeholder="Viết bình luận của bạn:"
                                   value={content_comment}
                                   onChange={(e) =>
                                        setContent_comment(e.target.value)
                                   }
                              />
                              <button onClick={() => handleSendComment()}>
                                   Gửi bình luận
                              </button>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     );
};

export default ContainerNewsSearch;
