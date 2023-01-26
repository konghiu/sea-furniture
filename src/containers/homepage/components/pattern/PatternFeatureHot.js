import React from "react";
import headerBar from "../../../../components/header/header-bar/headerBar.json";
import { Link } from "react-router-dom";
import Product from "../../../../components/products/Product";
import Slider from "react-slick";
import "./pattern.css";

const settings = {
     dots: false,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,
     rows: 2,
     arrows: true,
     responsive: [
          {
               breakpoint: 1200,
               settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
               },
          },
          {
               breakpoint: 480,
               settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
               },
          },
     ],
};
const PatternFeatureHot = (props) => {
     const list_products = props.list_products;

     return (
          <div className="container-pattern">
               <div className="row-1 container-topic">
                    <div className="topic">
                         <p>SẢN PHẨM NỔI BẬT</p>
                    </div>
                    <div className="categories">
                         {headerBar[2].content.map((item, index) => (
                              <Link
                                   key={index}
                                   to={`/sea-furniture/products${item.to}`}
                              >
                                   {item.title}
                              </Link>
                         ))}
                    </div>
                    <div>
                         <button
                              type="button"
                              data-role="none"
                              className="slick-arrow slick-prev"
                         ></button>
                    </div>
               </div>
               <Slider {...settings} className="row-2">
                    {list_products &&
                         list_products.map((item) => (
                              <Product key={item.id} item={item} />
                         ))}
               </Slider>
          </div>
     );
};

export default PatternFeatureHot;
