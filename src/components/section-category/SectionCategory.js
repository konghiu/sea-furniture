import React from "react";
import { useNavigate } from "react-router-dom";
import { list_icon_category } from "./list-icon_category";
import "./sectionCategory.css";

const SectionCategory = () => {
     const navigate = useNavigate();

     return (
          <div className="ctner-sec-category screen-width grid grid-cols-6 ">
               {list_icon_category.map((item) => (
                    <div
                         className="icon_category cursor-pointer"
                         key={item.id}
                         onClick={() =>
                              navigate(`/sea-furniture/products/${item.url}`)
                         }
                    >
                         <div className="icon_category-inner">
                              <div className="icon_category-front">
                                   <img src={item.icon} alt="" />
                              </div>
                              {/* <div className="icon_category-back">
                                   <img src={item.icon} alt="" />
                              </div> */}
                         </div>
                         <p>{item.title}</p>
                    </div>
               ))}
          </div>
     );
};

export default SectionCategory;
