import React, { useEffect, useState } from "react";
import brandslist from "./brandslist.json";
import "./brandslist.css";

const BrandsPart = (props) => {
     const [checkbox, setCheckbox] = useState(null);

     useEffect(() => {
          props.handleSetCheckBrand(checkbox);
     }, [checkbox]);

     return (
          <div className="container-brandslist-part">
               <div className="title">
                    <p>THƯƠNG HIỆU</p>
               </div>
               <div className="content">
                    <form>
                         {brandslist.map((item) => (
                              <div key={item.id}>
                                   <input
                                        type="checkbox"
                                        onChange={() => {
                                             if (item.brand === checkbox) {
                                                  setCheckbox(null);
                                                  return;
                                             }
                                             setCheckbox(item.brand);
                                        }}
                                        checked={checkbox === item.brand}
                                   />
                                   <label>{item.brand}</label>
                              </div>
                         ))}
                    </form>
               </div>
          </div>
     );
};

export default React.memo(BrandsPart);
