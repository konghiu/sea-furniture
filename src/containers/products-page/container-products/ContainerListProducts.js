import React, { useEffect, useState } from "react";
import useFetch from "../../../config/useFetch";
import Product from "../../../components/products/Product";
import "./container-list-products.css";

const ContainerListProducts = () => {
     const [list_products, setList_products] = useState(null);
     const api = useFetch("/api/products");
     useEffect(() => {
          setList_products(api.products);
     }, [api]);

     return (
          <div className="container-list-products">
               <div className="row-1">
                    <p className="title">Tất cả sản phẩm</p>
                    <div className="option">
                         <label>Sắp xếp theo: </label>
                         <select>
                              <option defaultValue>Mặc định</option>
                              <option>A -{">"} Z</option>
                              <option>Z -{">"} A</option>
                              <option>Giá tăng dần</option>
                              <option>Giá giảm dần</option>
                         </select>
                    </div>
               </div>
               <div className="row-2 grid grid-cols-4 gap-7">
                    {list_products
                         ? list_products.map((item) => {
                                return <Product key={item.id} item={item} />;
                           })
                         : null}
               </div>
          </div>
     );
};

export default ContainerListProducts;
