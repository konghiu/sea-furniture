import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/profile/logo.webp";
import context from "../../common/context";
import "./header.css";
import InputSearch from "./InputSearch";

const Header = () => {
     const navigate = useNavigate();

     const consumer = useContext(context);
     const user_cart = consumer[0].user_cart;
     const user_account = consumer[0].user_account;

     return (
          <div className="header">
               <div
                    className="cursor-pointer container-logo"
                    onClick={() => navigate("/sea-furniture/homepage")}
               >
                    <img src={logo} alt="" />
               </div>
               <div className="container-input-search">
                    <InputSearch />
               </div>
               <div className="buttons-log flex justify-between">
                    {/* check user account */}
                    {user_account ? (
                         <div>
                              <p>
                                   <Link to="/sea-furniture/account">
                                        Tài khoản
                                   </Link>
                              </p>
                              <span></span>
                              <p>
                                   <Link to="/sea-furniture/sign/logout">
                                        Đăng xuất
                                   </Link>
                              </p>
                         </div>
                    ) : (
                         <div>
                              <p>
                                   <Link to="/sea-furniture/sign/register">
                                        Đăng ký
                                   </Link>
                              </p>
                              <span></span>
                              <p>
                                   <Link to="/sea-furniture/sign/login">
                                        Đăng nhập
                                   </Link>
                              </p>
                         </div>
                    )}
                    <div className="icon-cart">
                         <Link to="/sea-furniture/cart">
                              {user_cart.length > 0 && (
                                   <span>{user_cart.length}</span>
                              )}
                              <i className="fa-solid fa-cart-shopping main-color text-lg cursor-pointer"></i>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Header;
