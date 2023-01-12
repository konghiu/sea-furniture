import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import context from "../../common/context";
import "./news-page.css";

const Newspage = () => {
     const consumer = useContext(context);
     const list_news = consumer[0].news_list;
     const account = consumer[0].user_account;
     const notify_for_user = consumer[0].notify_for_user;
     const dispatch = consumer[1];

     return (
          <>
               <div className="content-news-page">
                    <Outlet
                         context={{
                              list_news,
                              account,
                              notify_for_user,
                              dispatch,
                         }}
                    />
               </div>
          </>
     );
};

export default Newspage;
