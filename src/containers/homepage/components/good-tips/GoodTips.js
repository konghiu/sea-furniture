import React, { useEffect, useState } from "react";
import NewsItem from "../../../../components/news-item/NewsItem";
import ComponentWaitLoad from "../../../../components/loading/ComponentWaitLoad";

import Slider from "react-slick";
import "./good-tips.css";

const settings = {
     dots: false,
     infinite: false,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: true,
     responsive: [
          {
               breakpoint: 999,
               settings: {
                    slidesToShow: 2,
               },
          },
          {
               breakpoint: 765,
               settings: {
                    slidesToShow: 1,
               },
          },
     ],
};

const GoodTips = (props) => {
     const [list_news, setList_news] = useState(null);

     useEffect(() => {
          if (props.list_news) {
               setList_news(() => {
                    const next = props.list_news.filter((item, index) => {
                         return index < 4;
                    });
                    return next;
               });
          }
     }, [props]);

     return (
          <div className="good-tips">
               <div className="col-1 container-topic">
                    <div className="topic">
                         <p>SẢN PHẨM MỚI VỀ</p>
                    </div>
               </div>
               {list_news ? (
                    <Slider {...settings} className="col-2">
                         {list_news.map((news) => (
                              <NewsItem key={news.id} news={news} />
                         ))}
                    </Slider>
               ) : (
                    <ComponentWaitLoad />
               )}
          </div>
     );
};

export default React.memo(GoodTips);
