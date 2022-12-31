import React, { useEffect, useState } from "react";
import headerBar from "../header-bar/headerBar.json";
import ghemauden from "../../../../assets/profile/ghemauden.webp";
import "./featured-products.css";
import { Link } from "react-router-dom";
import Product from "../../../../components/products/Product";

const FeaturedProducts = (props) => {
     const [featured_products, setFeatured_products] = useState(null);
     useEffect(() => {
          const list = props.list_products;
          if (Array.isArray(list)) {
               for (let i = 0; i < list.length; i++) {
                    for (let j = i + 1; j < list.length; j++) {
                         if (list[i].view < list[j].view) {
                              let swap = list[i];
                              list[i] = list[j];
                              list[j] = swap;
                         }
                    }
               }
               const export_list = list.filter((item, index) => index < 8);
               setFeatured_products(export_list);
          }
     }, [props.list_products]);

     return (
          <div className="container-featured-products">
               <div className="col-1">
                    <div className="container-img">
                         <img src={ghemauden} alt="" />
                    </div>
                    <div className="container-timer">
                         <p>
                              <span>324</span>
                              <span>Năm</span>
                         </p>
                         <p>
                              <span>27</span>
                              <span>Ngày</span>
                         </p>
                         <p>
                              <span>11</span>
                              <span>Giờ</span>
                         </p>
                         <p>
                              <span>14</span>
                              <span>Giây</span>
                         </p>
                    </div>
                    <div className="container-info-product">
                         <p>Ghế Luxury</p>
                         <p>Luxury</p>
                         <p>
                              570.000<sup>đ</sup>
                         </p>
                    </div>
               </div>
               <div className="col-2">
                    <div className="col-2-1">
                         <div className="topic">
                              <p>SẢN PHẨM NỔI BẬT</p>
                         </div>
                         <div className="categories">
                              {headerBar[2].content.map((item, index) => (
                                   <Link key={index} to={item.to}>
                                        {item.title}
                                   </Link>
                              ))}
                         </div>
                         <div className="buttons-slide">
                              <i className="fa-solid fa-chevron-left"></i>
                              <i className="fa-solid fa-chevron-right"></i>
                         </div>
                    </div>
                    <div className="col-2-2 grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-9">
                         {featured_products &&
                              featured_products.map((item) => (
                                   <Product key={item.id} item={item} />
                              ))}
                    </div>
               </div>
          </div>
     );
};

export default FeaturedProducts;
