import React, { useEffect, useState } from "react";
import BuyProduct from "./buy-product/BuyProduct";
import QuickViewProduct from "./quick-view-product/QuickViewProduct";
import "./product.css";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
     let item = props.item;
     // console.log("item: ", item);

     const navigate = useNavigate();

     const [quick_view, set_quick_view] = useState(false);
     const [buy_product, set_buy_product] = useState(false);

     const handleCloseQuickView = (statementClose) => {
          statementClose && set_quick_view(false);
     };
     const handleCloseBuyProduct = (statementClose) => {
          statementClose && set_buy_product(false);
     };

     return (
          <React.Fragment>
               {item ? (
                    <div className="product">
                         {quick_view && (
                              <QuickViewProduct
                                   closeQuickView={(statementClose) =>
                                        handleCloseQuickView(statementClose)
                                   }
                                   item={item}
                              />
                         )}
                         {buy_product && (
                              <BuyProduct
                                   closeBuyProduct={(statementClose) =>
                                        handleCloseBuyProduct(statementClose)
                                   }
                                   item={item}
                              />
                         )}
                         <div className="container-img">
                              <span
                                   className="banner-shadow"
                                   onClick={(e) =>
                                        navigate(
                                             `/sea-furniture/products/product/${item.alias}`
                                        )
                                   }
                              ></span>
                              <img src={item.images[0]} alt="" />
                              <div className="container-option">
                                   <span
                                        className="span"
                                        onClick={() =>
                                             set_quick_view(!quick_view)
                                        }
                                   >
                                        <i className="fa-solid fa-eye"></i>
                                   </span>
                                   <span
                                        className="span"
                                        onClick={() =>
                                             set_buy_product(!buy_product)
                                        }
                                   >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                   </span>
                              </div>
                         </div>
                         <p className="name-product">{item.name}</p>
                         <p className="price-product">
                              {item.price.toLocaleString()}
                              <sup>đ</sup>
                         </p>
                    </div>
               ) : null}
          </React.Fragment>
     );
};

export default Product;
