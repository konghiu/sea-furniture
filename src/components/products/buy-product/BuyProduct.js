import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import context from "../../../common/context";
import {
     ADD_PRODUCT,
     BUYPRODUCT,
     HISTORY,
} from "../../../common/context/reducer/actions";
import "./buy-product.css";

const BuyProduct = (props) => {
     const consumer = useContext(context);
     const buy_product = consumer[0].buy_product;
     const account = consumer[0].user_account;
     const dispatch = consumer[1];

     const navigate = useNavigate();

     const [product, setProduct] = useState(null);
     const [quantity, setQuantity] = useState(1);

     useEffect(() => {
          setProduct(buy_product);
     }, [buy_product]);

     const total_price = useMemo(() => {
          let total = 0;
          console.log(product);
          if (product && product.product) {
               total = product.product.price * quantity;
          }
          return total;
     }, [quantity, product]);

     const create_order = () => {
          let newItem = { ...buy_product.product, quantity: quantity };
          newItem.quantity = quantity;
          newItem.image = buy_product.product.images[0];
          return newItem;
     };

     const handleAccessCart = () => {
          let add_item = create_order();
          dispatch(ADD_PRODUCT(add_item));
          navigate("/sea-furniture/cart");
          handleCloseBuyProduct(add_item);
     };

     const handleBuyProduct = () => {
          let buy_item = create_order();
          dispatch(ADD_PRODUCT(buy_item));
          if (!account) {
               dispatch(HISTORY("/sea-furniture/payment"));
               handleCloseBuyProduct(buy_item);
               navigate("/sea-furniture/sign/login");
               return;
          }
          handleCloseBuyProduct(buy_item);
          navigate("/sea-furniture/payment");
     };

     const handleCloseBuyProduct = (product) => {
          dispatch(
               BUYPRODUCT({
                    product: product,
                    view: false,
               })
          );
          setQuantity(1);
     };

     return (
          <React.Fragment>
               {product && product.view === true ? (
                    <div
                         className="buy-product"
                         onClick={(e) => {
                              if (
                                   e.target ===
                                   document.querySelector(".buy-product")
                              ) {
                                   dispatch(BUYPRODUCT(null));
                                   setQuantity(1);
                              }
                         }}
                    >
                         <div className="content">
                              <p className="title">
                                   <i className="fa-solid fa-check"></i>
                                   <span>Sản phẩm vừa được thêm giỏ hàng</span>
                              </p>
                              <div className="container-product">
                                   {product.product && (
                                        <div className="product-to-buy">
                                             <div className="col-1">
                                                  <div>
                                                       <img
                                                            src={
                                                                 product.product
                                                                      .images[0]
                                                            }
                                                            alt=""
                                                       />
                                                  </div>
                                                  <div>
                                                       <p>
                                                            {
                                                                 product.product
                                                                      .name
                                                            }
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="col-2">
                                                  <div className="col-2_1">
                                                       <p>
                                                            {product.product.price.toLocaleString()}
                                                            <sup>đ</sup>
                                                       </p>
                                                  </div>
                                                  <div className="col-2_2">
                                                       <button
                                                            onClick={() =>
                                                                 setQuantity(
                                                                      (prev) =>
                                                                           prev >
                                                                           1
                                                                                ? prev -
                                                                                  1
                                                                                : prev
                                                                 )
                                                            }
                                                       >
                                                            -
                                                       </button>
                                                       <p>{quantity}</p>
                                                       <button
                                                            onClick={() =>
                                                                 setQuantity(
                                                                      (prev) =>
                                                                           prev +
                                                                           1
                                                                 )
                                                            }
                                                       >
                                                            +
                                                       </button>
                                                  </div>
                                                  <div className="col-2_3">
                                                       <p>
                                                            {total_price.toLocaleString()}
                                                            <sup>đ</sup>
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </div>
                              <div className="total-price">
                                   <div className="col-1">
                                        <p>GIỎ HÀNG CỦA BẠN</p>
                                        <p>{"(1 sản phẩm)"}</p>
                                   </div>
                                   <div className="col-2">
                                        <p>Tổng tiền thanh toán:</p>
                                        <p>
                                             {total_price.toLocaleString()}
                                             <sup>đ</sup>
                                        </p>
                                   </div>
                              </div>
                              <div className="container-buttons">
                                   <button onClick={() => handleAccessCart()}>
                                        Tới giỏ hàng
                                   </button>
                                   <button onClick={() => handleBuyProduct()}>
                                        Tiến hành thanh toán
                                   </button>
                              </div>
                         </div>
                    </div>
               ) : null}
          </React.Fragment>
     );
};

export default BuyProduct;
