import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/profile/logo.webp";
import context from "../../common/context";
import "./header.css";

const Header = () => {
     const consumer = useContext(context);
     const user_cart = consumer[0].user_cart;

     return (
          <div className="header">
               <div>
                    <img src={logo} alt="" />
               </div>
               <div className="search-input">
                    <input className="" placeholder="Nhập từ khóa tìm kiếm" />
                    <span>
                         <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
               </div>
               <div className="buttons-log flex justify-between">
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
                    <div className="icon-cart">
                         {user_cart.length > 0 && (
                              <span>{user_cart.length}</span>
                         )}
                         <Link to="/sea-furniture/cart">
                              <i className="fa-solid fa-cart-shopping main-color text-lg cursor-pointer"></i>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Header;
