import React, { useContext, useMemo } from "react";
import ProductInCart from "./product-in-cart/ProductInCart";
import context from "../../common/context";
import { Link, useNavigate } from "react-router-dom";
import "./cart-page.css";
import { HISTORY } from "../../common/context/reducer/actions";

const Cartpage = () => {
     const navigate = useNavigate();
     const consumer = useContext(context);
     const user_cart = consumer[0].user_cart;
     const user_account = consumer[0].user_account;
     const dispatch = consumer[1];

     const total_price = useMemo(() => {
          let total = 0;
          user_cart.forEach((item) => {
               total += item.price * item.quantity;
          });
          return total;
     }, [user_cart]);

     const handlePreparePayment = () => {
          if (user_account) {
               navigate("/sea-furniture/payment");
          } else {
               dispatch(HISTORY("/sea-furniture/payment"));
               navigate("/sea-furniture/sign/login");
               dispatch(HISTORY(null));
          }
     };

     return (
          <>
               <div className="container-content-cart-page">
                    <p className="title">Giỏ hàng của bạn</p>
                    {user_cart.length > 0 ? (
                         <div className="content has-products">
                              <div className="header">
                                   <p className="product">
                                        <span>Sản phẩm</span>
                                   </p>
                                   <p className="price">
                                        <span>Giá</span>
                                   </p>
                                   <p className="quantity">
                                        <span>Số lượng</span>
                                   </p>
                                   <p className="total">
                                        <span>Thành tiền</span>
                                   </p>
                              </div>
                              <div className="container-products">
                                   {user_cart.map((item, index) => (
                                        <ProductInCart
                                             key={index}
                                             index={index}
                                             item={item}
                                        />
                                   ))}
                              </div>
                              <div className="container-totals">
                                   <div className="totals">
                                        <div className="total-price">
                                             <p>Tổng tiền thanh toán:</p>
                                             <p>
                                                  {total_price.toLocaleString()}
                                                  <sup>đ</sup>
                                             </p>
                                        </div>
                                        <div className="checkout">
                                             <button
                                                  onClick={() =>
                                                       navigate(
                                                            "/sea-furniture/products"
                                                       )
                                                  }
                                             >
                                                  Tiếp tục mua hàng
                                             </button>
                                             <button
                                                  onClick={() =>
                                                       handlePreparePayment()
                                                  }
                                             >
                                                  Tiến hành thanh toán
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ) : (
                         <div className="content not-products">
                              <p>
                                   Không có sản phẩm nào trong giỏ hàng. Quay
                                   lại{" "}
                                   <Link
                                        to={"/sea-furniture/products"}
                                        className="hover:underline"
                                        style={{ color: "var(--main-color)" }}
                                   >
                                        cửa hàng
                                   </Link>{" "}
                                   để tiếp tục mua sắm.
                              </p>
                         </div>
                    )}
               </div>
          </>
     );
};

export default Cartpage;
