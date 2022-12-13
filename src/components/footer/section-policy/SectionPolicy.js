import React from "react";
import Slider from "react-slick";
import { lists_section_policy } from "./lists-section-policy";

const SectionPolicy = () => {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 3,
     };
     return (
          <div className="section-policy">
               <Slider {...settings}>
                    {lists_section_policy.map((item, index) => {
                         return (
                              <div key={index} className="policy-item">
                                   <div className="policy_flip">
                                        <div className="policy_flip-inner">
                                             <div className="policy_flip-front">
                                                  <img src={item.icon} alt="" />
                                             </div>
                                        </div>
                                   </div>
                                   <div className="container-describe">
                                        <p>{item.title}</p>
                                        <p>{item.content}</p>
                                   </div>
                              </div>
                         );
                    })}
               </Slider>
          </div>
     );
};

export default SectionPolicy;
