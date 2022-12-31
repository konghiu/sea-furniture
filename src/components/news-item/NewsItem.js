import React from "react";
import { useNavigate } from "react-router-dom";
import slugify from "react-slugify";
// import news_item_1 from "../../assets/profile/news_item_1.webp";
import "./news-item.css";

const NewsItem = (props) => {
     const navigate = useNavigate();

     const handleShowNews = () => {
          const location_search = slugify(props.news.title, {
               lower: true,
               strict: true,
               locale: "vi",
          });
          navigate(`/sea-furniture/news/${location_search}`);
     };

     return (
          <div className="container-news-item">
               <div className="container-img">
                    <img src={props.news.image} alt="" />
               </div>
               <div className="container-title">
                    <p className="title" onClick={() => handleShowNews()}>
                         {props.news.title}
                    </p>
                    <p
                         className="describe"
                         dangerouslySetInnerHTML={{
                              __html: props.news.describe,
                         }}
                    ></p>
                    {/* <p className="describe">{}</p> */}
               </div>
          </div>
     );
};

export default NewsItem;
