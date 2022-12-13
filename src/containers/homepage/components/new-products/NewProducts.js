import React, { useEffect, useState } from "react";
import Product from "../../../../components/products/Product";
import "./new-products.css";

const NewProducts = (props) => {
     const [new_products, setNew_products] = useState(null);
     useEffect(() => {
          const list = props.list_products;
          if (Array.isArray(list)) {
               for (let i = 0; i < list.length; i++) {
                    for (let j = i + 1; j < list.length; j++) {
                         if (list[i].price < list[j].price) {
                              let swap = list[i];
                              list[i] = list[j];
                              list[j] = swap;
                         }
                    }
               }
               const export_list = list.filter((item, index) => index < 5);
               setNew_products(export_list);
          }
     }, [props.list_products]);
     return (
          <div className="new-products">
               <div className="col-1">
                    <div className="topic">
                         <p>SẢN PHẨM MỚI VỀ</p>
                    </div>
                    <div className="buttons-slide">
                         <i className="fa-solid fa-chevron-left"></i>
                         <i className="fa-solid fa-chevron-right"></i>
                    </div>
               </div>
               <div className="col-2 grid grid-cols-5 gap-5">
                    {new_products &&
                         new_products.map((item) => (
                              <Product key={item.id} item={item} />
                         ))}
               </div>
          </div>
     );
};

export default NewProducts;
