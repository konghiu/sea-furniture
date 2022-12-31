import React, { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import context from "../../common/context";
import { CLEAR_PRODUCT } from "../../common/context/reducer/actions";
import Breadcrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import ContainerHeader from "../../components/header/ContainerHeader";
import feature_return_top from "../../features/feature_return_top";
import "./payment-page.css";

const Paymentpage = () => {
     const navigate = useNavigate();

     const consumer = useContext(context);
     const dispatch = consumer[1];
     const user_cart = consumer[0].user_cart;

     useEffect(() => {
          if (user_cart.length <= 0) {
               navigate("/sea-furniture/cart");
          }
          return () => {
               feature_return_top();
          };
     }, []);

     const totalPrice = useMemo(() => {
          let total = 0;
          user_cart.forEach((item) => {
               total += item.quantity * item.price;
          });
          return total;
     }, [user_cart]);

     return (
          <div className="payment-page">
               <ContainerHeader />
               <Breadcrum />
               <div className="content">
                    <div id="form-wrapper">
                         <div id="form-left-wrapper">
                              <div id="form-tab-menu">
                                   <div className="tab-menu-item current payment-tab">
                                        Thanh toán
                                   </div>
                              </div>
                              <div id="form-body">
                                   <div id="shipping-body">
                                        <div id="contact-details">
                                             <div className="form-input input-small">
                                                  <label>Họ và tên</label>
                                                  <br />
                                                  <input
                                                       type="text"
                                                       placeholder="Họ và tên"
                                                       className="name-input"
                                                  />
                                             </div>
                                             <div className="form-input input-small">
                                                  <label>Số điện thoại</label>
                                                  <br />
                                                  <input
                                                       type="number"
                                                       placeholder="Số điện thoại"
                                                       className="phone-input"
                                                  />
                                             </div>
                                             <div className="form-input input-small">
                                                  <label>E-mail</label>
                                                  <br />
                                                  <input
                                                       type="email"
                                                       placeholder="Email"
                                                       className="email-input"
                                                  />
                                             </div>
                                        </div>
                                        <div className="hr"></div>
                                        <div id="Address-details">
                                             <div className="form-input input-small">
                                                  <label>Contact Number</label>
                                                  <br />
                                                  <input
                                                       type="number"
                                                       name="company"
                                                       placeholder="Contact Number"
                                                       id="contact-input"
                                                       className="number-input"
                                                  />
                                             </div>
                                             <div className="form-input input-medium">
                                                  <label>Street Address</label>
                                                  <br />
                                                  <input
                                                       type="text"
                                                       name="address"
                                                       placeholder="Street Address"
                                                       id="address-input"
                                                       className="address-input"
                                                  />
                                             </div>
                                             <div className="form-input input-small">
                                                  <label>Country</label>
                                                  <br />
                                                  <input
                                                       type="text"
                                                       name="country"
                                                       placeholder="Country"
                                                       id="country-input"
                                                       className="country-input"
                                                  />
                                             </div>
                                             <div className="form-input input-small">
                                                  <label>City</label>
                                                  <br />
                                                  <input
                                                       type="text"
                                                       name="city"
                                                       placeholder="City"
                                                       id="city-input"
                                                       className="city-input"
                                                  />
                                             </div>
                                             <div className="form-input input-small">
                                                  <label>Post Code</label>
                                                  <br />
                                                  <input
                                                       type="number"
                                                       name="postcode"
                                                       placeholder="Post Code"
                                                       id="postcode-input"
                                                       className="postcode-input"
                                                  />
                                             </div>
                                             <div
                                                  className="hr"
                                                  Style="margin-bottom: 5px;"
                                             ></div>
                                             <div className="form-input-checkbox">
                                                  <input
                                                       type="checkbox"
                                                       id="shipping-checkbox"
                                                  />{" "}
                                                  Cam kết những thông tin trên
                                                  là chính xác.
                                             </div>
                                        </div>
                                        <div id="form-submit">
                                             <button
                                                  onClick={() => {
                                                       alert(
                                                            "Bạn đã đặt hàng thành công"
                                                       );
                                                       dispatch(
                                                            CLEAR_PRODUCT()
                                                       );
                                                       navigate(
                                                            "/sea-furniture/homepage"
                                                       );
                                                  }}
                                             >
                                                  Next
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div id="form-cart-menu">
                              <div className="shopping-cart-head">
                                   <h1 className="mb-5">Shopping Cart</h1>
                                   <div>
                                        {user_cart.map((item) => (
                                             <div className="flex my-2 justify-between text-white">
                                                  <div className="w-10 ">
                                                       <img
                                                            src={item.image}
                                                            alt=""
                                                       />
                                                  </div>
                                                  <div>
                                                       <p>{item.name}</p>
                                                       <p>{item.quantity}</p>
                                                  </div>
                                                  <div>
                                                       <p>
                                                            {item.price.toLocaleString()}
                                                            <sup>đ</sup>
                                                       </p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                              <div className="shopping-cart-total w-full flex justify-between">
                                   <p className="cart-total">Tổng giá: </p>
                                   <p className="">
                                        {totalPrice.toLocaleString()}
                                        <sup>đ</sup>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     );
};

export default Paymentpage;
