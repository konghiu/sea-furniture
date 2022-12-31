import React, { useEffect, useState } from "react";
import Product from "../../../../components/products/Product";
import "./new-products.css";

const NewProducts = (props) => {
     const [new_products, setNew_products] = useState(null);
     useEffect(() => {
          const list = props.list_products;
          if (Array.isArray(list)) {
               let new_list = [];
               for (let i = list.length - 1; i > 0; i--) {
                    new_list.push(list[i]);
                    if (i === 0 || new_list.length === 5) break;
               }
               console.log(new_list);
               setNew_products(new_list);
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
