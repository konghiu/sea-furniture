import React, { useEffect, useState } from "react";
import price_range_list from "./price-range-list.json";
import "./price-range-part.css";

const PriceRangePart = (props) => {
     const [checkbox, setCheckbox] = useState(null);

     useEffect(() => {
          props.handleSetCheckPrice(checkbox);
     }, [checkbox]);

     const handleChangePrice = (item) => {
          if (checkbox && item["price-min"] === checkbox.min) {
               setCheckbox(null);
               return;
          }
          setCheckbox({
               min: Number(item["price-min"]),
               max: Number(item["price-max"]),
          });
     };

     return (
          <div className="container-pricerange-part">
               <div className="title">
                    <p>KHOẢNG GIÁ</p>
               </div>
               <div className="content">
                    <ul>
                         {price_range_list.map((item) => (
                              <div key={item.id}>
                                   <input
                                        type="checkbox"
                                        onChange={() => handleChangePrice(item)}
                                        checked={
                                             checkbox !== null &&
                                             checkbox.min === item["price-min"]
                                        }
                                   />
                                   <label key={item.id}>
                                        {item["price-min"] === 0 && "Giá dưới "}
                                        {item["price-max"] === "Infinity" &&
                                             "Giá trên "}
                                        {item["price-min"] !== 0 &&
                                             item["price-min"] + "đ  - "}
                                        {item["price-max"] !== "Infinity" &&
                                             item["price-max"] + "đ"}
                                   </label>
                              </div>
                         ))}
                    </ul>
               </div>
          </div>
     );
};

export default PriceRangePart;
