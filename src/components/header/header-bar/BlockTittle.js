import React, { useEffect, useState } from "react";
import logo from "../../../assets/profile/logo.webp";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const BlockTittle = () => {
     const location = useLocation();
     const navigate = useNavigate();

     const [openNav, setOpenNav] = useState(false);

     useEffect(() => {
          const nav_mo_tb = document.querySelector(".nav-mobile-tablet");
          const banner = document.querySelector(".header-bar .banner");
          if (openNav) {
               nav_mo_tb.classList.add("open_nav-mobile-tablet");
               banner.style.display = "block";
               return;
          }
          nav_mo_tb.classList.remove("open_nav-mobile-tablet");
          banner.style.display = "none";
     }, [openNav]);

     useEffect(() => {
          setOpenNav(false);
     }, [location.pathname]);

     return (
          <div className="block-title">
               <div className="container-bars">
                    <span
                         className="bars"
                         onClick={() => setOpenNav(!openNav)}
                    ></span>
               </div>
               <h4>DANH MỤC SẢN PHẨM</h4>
               {/* mobile or tablet */}
               <ul className="nav-mobile-tablet">
                    <div
                         className="cursor-pointer container-logo"
                         onClick={() => navigate("/sea-furniture/homepage")}
                    >
                         <img src={logo} alt="" />
                    </div>
                    <Nav
                         handleCloseNav={(notify) => {
                              if (notify) setOpenNav(false);
                         }}
                    />
               </ul>
               <div className="nav-mobile">
                    <i className="fa-solid fa-magnifying-glass"></i>
               </div>
               <span
                    className="banner"
                    onClick={() => setOpenNav(false)}
               ></span>
          </div>
     );
};

export default BlockTittle;
