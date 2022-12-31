import React, { useContext, useEffect, useMemo } from "react";
import ContainerHeader from "../../components/header/ContainerHeader";
import BreadCrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import "./cart-page.css";
import ProductInCart from "./product-in-cart/ProductInCart";
import context from "../../common/context";
import { Link, useNavigate } from "react-router-dom";
import feature_return_top from "../../features/feature_return_top";

const Cartpage = () => {
     const navigate = useNavigate();
     const consumer = useContext(context);
     const user_cart = consumer[0].user_cart;
     const user_account = consumer[0].user_account;

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
               navigate("/sea-furniture/sign/login");
          }
     };
     useEffect(() => {
          return () => {
               feature_return_top();
          };
     }, []);

     return (
          <div className="cart-page">
               <ContainerHeader />
               <BreadCrum />
               <div className="container-content">
                    <p className="title">Giỏ hàng của bạn</p>
                    {user_cart.length > 0 ? (
                         <div className="content has-products">
                              <div className="header">
                                   <p>Sản phẩm</p>
                                   <p>Giá</p>
                                   <p>Số lượng</p>
                                   <p>Thành tiền</p>
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
               <Footer />
          </div>
     );
};

export default Cartpage;
