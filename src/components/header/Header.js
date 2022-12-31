import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import slugify from "react-slugify";
import logo from "../../assets/profile/logo.webp";
import context from "../../common/context";
import { NOTIFY_ADD } from "../../common/context/reducer/actions";
import "./header.css";

const Header = () => {
     const navigate = useNavigate();

     const consumer = useContext(context);
     const user_cart = consumer[0].user_cart;
     const user_account = consumer[0].user_account;

     const [warning, setWarning] = useState(null);
     const [searchText, setSearchText] = useState("");

     const handleSearchProducts = () => {
          if (searchText.trim() === "") {
               setWarning(true);
               return;
          }
          navigate("/sea-furniture/products/search/" + searchText.trim());
     };

     return (
          <div className="header">
               <div
                    className="cursor-pointer"
                    onClick={() => navigate("/sea-furniture/homepage")}
               >
                    <img src={logo} alt="" />
               </div>
               <div className="search-input">
                    {warning && (
                         <span className="warning">Yêu cầu nhập thông tin</span>
                    )}
                    <input
                         className=""
                         placeholder="Nhập từ khóa tìm kiếm"
                         value={searchText}
                         onFocus={() => setWarning(null)}
                         onChange={(e) => setSearchText(e.target.value)}
                         onKeyDown={(e) => {
                              if (warning) setWarning(null);
                              if (e.key === "Enter") handleSearchProducts();
                         }}
                    />
                    <span
                         className="cursor-pointer icon_search"
                         onClick={() => handleSearchProducts()}
                    >
                         <i className="fa-solid fa-magnifying-glass "></i>
                    </span>
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
