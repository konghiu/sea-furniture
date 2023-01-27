import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { list_icon_category } from "./list-icon_category";
import "./sectionCategory.css";
const settings = {
     dots: false,
     infinite: false,
     arrows: false,
     speed: 500,
     slidesToShow: 6,
     slidesToScroll: 1,
     responsive: [
          {
               breakpoint: 1200,
               settings: {
                    slidesToShow: 5,
               },
          },
          {
               breakpoint: 999,
               settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
               },
          },
          {
               breakpoint: 765,
               settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
               },
          },
          {
               breakpoint: 567,
               settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
               },
          },
     ],
};
const SectionCategory = () => {
     const navigate = useNavigate();

     return (
          <Slider className="ctner-sec-category" {...settings}>
               {list_icon_category.map((item) => (
                    <div
                         className="icon_category"
                         key={item.id}
                         onClick={() =>
                              navigate(`/sea-furniture/products/${item.url}`)
                         }
                    >
                         <div className="icon_category-inner">
                              <div className="icon_category-front">
                                   <img src={item.icon} alt="" />
                              </div>
                         </div>
                         <p>{item.title}</p>
                    </div>
               ))}
               {/* <div className="icon_category-back">
          <img src={item.icon} alt="" />
     </div> */}
          </Slider>
     );
};

export default SectionCategory;
