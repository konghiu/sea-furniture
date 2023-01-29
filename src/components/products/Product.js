import React, { useContext } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import context from "../../common/context";
import {
     BUYPRODUCT,
     QUICKVIEWPRODUCT,
} from "../../common/context/reducer/actions";

const Product = (props) => {
     let item = props.item;

     const navigate = useNavigate();
     const consumer = useContext(context);
     const dispatch = consumer[1];

     const handleQuickViewProduct = () => {
          dispatch(QUICKVIEWPRODUCT(item));
     };
     const handleBuyProduct = () => {
          dispatch(
               BUYPRODUCT({
                    product: item,
                    view: true,
               })
          );
     };

     return (
          <React.Fragment>
               {item ? (
                    <div className="product">
                         <div className="container-img">
                              <span
                                   className="banner-shadow"
                                   onClick={() => {
                                        navigate(
                                             `/sea-furniture/products/product${item.url}`
                                        );
                                   }}
                              ></span>
                              <img src={item.images[0]} alt="" />
                              <div className="container-option">
                                   <span
                                        className="span"
                                        onClick={() => handleQuickViewProduct()}
                                   >
                                        <i className="fa-solid fa-eye"></i>
                                   </span>
                                   <span
                                        className="span"
                                        onClick={() => handleBuyProduct()}
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
