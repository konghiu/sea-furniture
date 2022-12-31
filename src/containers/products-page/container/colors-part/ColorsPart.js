import React, { useEffect, useState } from "react";
import colors_list from "./colors-list.json";
import { clsx } from "clsx";
import "./colors-part.css";

const ColorsPart = (props) => {
     const [checkColor, setCheckColor] = useState(null);
     useEffect(() => {
          props.handleSetCheckColor(checkColor);
     }, [checkColor]);
     return (
          <div className="container-colors-part">
               <div className="title">
                    <p>DANH MỤC</p>
               </div>
               <div className="content">
                    <ul>
                         {colors_list.map((item) => (
                              <li
                                   key={item.id}
                                   className={clsx({
                                        "border_main-color":
                                             item.name_color === "white",
                                   })}
                                   style={{ backgroundColor: item.name_color }}
                                   onClick={() => {
                                        if (item.name_color === checkColor) {
                                             setCheckColor(null);
                                             return;
                                        }
                                        setCheckColor(item.name_color);
                                   }}
                              >
                                   <span className="show_name">
                                        {item.name_color}
                                   </span>
                                   {item.name_color === checkColor && (
                                        <i className="fa-solid fa-check"></i>
                                   )}
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     );
};

export default ColorsPart;
