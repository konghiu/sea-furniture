import React from "react";
import headerBar from "./headerBar.json";
import { HOTLINE } from "../../../assets/auth/auth";
import logo from "../../../assets/profile/logo.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./headerBar.css";

const HeaderBar = () => {
     const location = useLocation();
     const navigate = useNavigate();

     const handleOpenNav = (notify) => {
          const nav = document.querySelector(".header-bar .nav");
          const banner = document.querySelector(".header-bar .banner");
          if (notify) {
               nav.style.transform = "translateX(0)";
               banner.style.display = "block";
               return;
          }
          nav.style.transform = "translateX(calc(-200%))";
          banner.style.display = "none";
     };

     return (
          <div className="header-bar flex justify-between">
               <div className="block-title">
                    <div className="container-bars">
                         <span
                              className="bars"
                              onClick={() => handleOpenNav(true)}
                         ></span>
                    </div>
                    <h4>DANH MỤC SẢN PHẨM</h4>
                    <div className="nav-mobile">
                         <div>
                              <i className="fa-solid fa-magnifying-glass"></i>
                         </div>
                    </div>
               </div>
               <span
                    className="banner"
                    onClick={() => handleOpenNav(false)}
               ></span>
               <ul className="nav">
                    <div
                         className="cursor-pointer container-logo"
                         onClick={() => navigate("/sea-furniture/homepage")}
                    >
                         <img src={logo} alt="" />
                    </div>
                    {headerBar.map((item, index) => {
                         return (
                              <li
                                   className="sub-link sub-link-level0"
                                   key={index}
                              >
                                   <Link
                                        className="main-link"
                                        to={item.to}
                                        style={
                                             location.pathname.includes(item.to)
                                                  ? { color: "#f7941d" }
                                                  : { color: "black" }
                                        }
                                        onClick={() => handleOpenNav(false)}
                                   >
                                        {item.title}
                                   </Link>
                                   {item.isContent && (
                                        <React.Fragment>
                                             <div className="sub-open-button"></div>
                                             <ul className="sub-menu sub-menu-level0">
                                                  {item.content.map(
                                                       (child, inChild) => (
                                                            <Link
                                                                 key={inChild}
                                                                 className="sub-link sub-link-level1"
                                                                 to={
                                                                      item.to +
                                                                      child.to
                                                                 }
                                                                 onClick={() =>
                                                                      handleOpenNav(
                                                                           false
                                                                      )
                                                                 }
                                                            >
                                                                 {child.title}
                                                            </Link>
                                                       )
                                                  )}
                                             </ul>
                                        </React.Fragment>
                                   )}
                              </li>
                         );
                    })}
               </ul>
               <div className="hotline">
                    <p className="">Hotline:</p>
                    <h2>{HOTLINE}</h2>
               </div>
          </div>
     );
};

export default HeaderBar;
