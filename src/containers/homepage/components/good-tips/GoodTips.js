import React, { useEffect, useState } from "react";
import NewsItem from "../../../../components/news-item/NewsItem";
import "./good-tips.css";

const GoodTips = (props) => {
     const [list_news, setList_news] = useState(null);

     useEffect(() => {
          if (props.list_news) {
               setList_news(() => {
                    const next = props.list_news.filter((item, index) => {
                         return index < 3;
                    });
                    return next;
               });
          }
     }, [props]);

     return (
          <div className="good-tips grid grid-cols-3 gap-10">
               {list_news ? (
                    <React.Fragment>
                         {list_news.map((news) => (
                              <NewsItem key={news.id} news={news} />
                         ))}
                    </React.Fragment>
               ) : null}
          </div>
     );
};

export default React.memo(GoodTips);
