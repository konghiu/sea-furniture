import React, { useContext, useEffect, useState } from "react";
import ContainerHeader from "../../components/header/ContainerHeader";
import Breadcrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";
import BackToTop from "../../components/back-to-top/BackToTop";
import feature_return_top from "../../features/feature_return_top";
import context from "../../common/context";
import "./contacts-page.css";
import {
     validEmailOrPhone,
     validUserName,
} from "../../features/feature_regex_sign/feature_regex_sign";
import { NOTIFY_ADD } from "../../common/context/reducer/actions";

const Contactspage = () => {
     const consumer = useContext(context);
     const account = consumer[0].user_account;
     const notify_for_user = consumer[0].notify_for_user;
     const dispatch = consumer[1];

     const [isLoading, setIsLoading] = useState(false);

     const [content_contact, setContent_contact] = useState("");
     const [fullname_contact, setFullname_contact] = useState("");
     const [email_contact, setEmail_contact] = useState("");

     useEffect(() => {
          return () => {
               feature_return_top();
          };
     }, []);

     const handleSendMessage = () => {
          setIsLoading(true);
          if (account) {
               if (content_contact === "") {
                    setTimeout(() => {
                         setIsLoading(false);
                         dispatch(
                              NOTIFY_ADD({
                                   id: notify_for_user.length * 10,
                                   type: "error",
                                   message: "Cần nhập nội dung bình luận.",
                              })
                         );
                    }, 1000);
                    return;
               } else {
                    setFullname_contact(account.user_name);
                    setEmail_contact(account.user_email);
               }
          } else {
               const validFullname = validUserName(fullname_contact);
               const validEmail = validEmailOrPhone(email_contact);
               const validContent = content_contact !== "";
               if (!validFullname || !validEmail || !validContent) {
                    setTimeout(() => {
                         setIsLoading(false);
                         dispatch(
                              NOTIFY_ADD({
                                   id: notify_for_user.length * 10,
                                   type: "error",
                                   message: "Cần nhập đầy đủ thông tin.",
                              })
                         );
                    }, 1000);
                    return;
               }
          }
          setTimeout(() => {
               setIsLoading(false);
               dispatch(
                    NOTIFY_ADD({
                         id: notify_for_user.length * 10,
                         type: "success",
                         message: "Bạn đã gửi thành công.",
                    })
               );
          }, 1000);
     };

     return (
          <div className="contacts-page">
               {isLoading && <Loading />}
               <ContainerHeader />
               <Breadcrum />
               <div className="content">
                    <div className="col-1">
                         <div className="info-store">
                              <p className="locate">
                                   <span>
                                        <i className="fa-solid fa-location-dot"></i>
                                   </span>
                                   Toà nhà Ladeco, 266 Đội Cấn, phường Liễu
                                   Giai, Quận Ba Đình, Hà Nội
                              </p>
                              <p className="phone">
                                   <span>
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                   </span>
                                   1900 1010
                              </p>
                              <p className="email">
                                   <span>
                                        <i className="fa-regular fa-envelope"></i>
                                   </span>
                                   seateam@gmail.com
                              </p>
                         </div>
                         <div className="container-form-contacts">
                              <p className="title">Liên hệ</p>
                              <div className="form-contacts">
                                   <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        value={fullname_contact}
                                        onChange={(e) =>
                                             setFullname_contact(e.target.value)
                                        }
                                   />
                                   <input
                                        type="email"
                                        placeholder="Email"
                                        value={email_contact}
                                        onChange={(e) =>
                                             setEmail_contact(e.target.value)
                                        }
                                   />
                                   <textarea
                                        type="text"
                                        placeholder="Nội dung"
                                        value={content_contact}
                                        onChange={(e) =>
                                             setContent_contact(e.target.value)
                                        }
                                   />
                                   <button onClick={() => handleSendMessage()}>
                                        Gửi đi
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="col-2">
                         <iframe
                              title="ggmap"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18289.9628399494!2d106.65314299625342!3d10.75448997540533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef6d3f19853%3A0x246af0e8b3aaf097!2zQ2jDuWEgQsOgIFRoacOqbiBI4bqtdSAtIFR14buHIFRow6BuaCBI4buZaSBRdcOhbg!5e0!3m2!1svi!2s!4v1669128734273!5m2!1svi!2s"
                              height="450"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                         ></iframe>
                    </div>
               </div>
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     );
};

export default Contactspage;
