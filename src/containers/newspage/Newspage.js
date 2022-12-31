import React, { useContext, useEffect, useState } from "react";
import BackToTop from "../../components/back-to-top/BackToTop";
import Breadcrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import ContainerHeader from "../../components/header/ContainerHeader";
import { Outlet } from "react-router-dom";
import context from "../../common/context";
import "./news-page.css";
import feature_return_top from "../../features/feature_return_top";

const Newspage = () => {
     const consumer = useContext(context);
     const list_news = consumer[0].news_list;
     const account = consumer[0].user_account;
     const notify_for_user = consumer[0].notify_for_user;
     const dispatch = consumer[1];

     // useEffect(() => {
     //      return () => {
     //           feature_return_top();
     //      };
     // }, []);

     return (
          <div className="news-page">
               <ContainerHeader />
               <Breadcrum />
               <div className="news-content">
                    <Outlet
                         context={{
                              list_news,
                              account,
                              notify_for_user,
                              dispatch,
                         }}
                    />
               </div>
               <Footer />

               {/* back to top */}
               <BackToTop />
          </div>
     );
};

export default Newspage;
