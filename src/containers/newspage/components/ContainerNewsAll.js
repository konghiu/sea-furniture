import React from "react";
import { useOutletContext } from "react-router-dom";
import ComponentWaitLoad from "../../../components/loading/ComponentWaitLoad";
import NewsItem from "../../../components/news-item/NewsItem";

const ContainerNewsAll = () => {
     const outletContext = useOutletContext();
     const list_news = outletContext.list_news;

     return (
          <React.Fragment>
               <div className="title">
                    <p>TIN TỨC</p>
               </div>
               {list_news ? (
                    <div className="container-news-item grid grid-cols-3 gap-8">
                         {list_news.map((news) => (
                              <NewsItem news={news} key={news.id} />
                         ))}
                    </div>
               ) : (
                    <ComponentWaitLoad />
               )}
          </React.Fragment>
     );
};

export default ContainerNewsAll;
