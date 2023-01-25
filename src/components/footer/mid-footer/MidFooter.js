import React from "react";
import { Link, useNavigate } from "react-router-dom";
import hours24 from "../../../assets/profile/24-hours.svg";
import logo from "../../../assets/profile/logo.webp";
import headerBar from "../../header/header-bar/headerBar.json";
import { HEADERQUATERS, HOTLINE, EMAIL } from "../../../assets/auth/auth";

const MidFooter = () => {
     const navigate = useNavigate();

     return (
          <div className="mid-footer">
               <div className="col-1">
                    <div
                         onClick={() => navigate("/sea-furniture/homepage")}
                         className="cursor-pointer"
                    >
                         <img src={logo} alt="" />
                    </div>
                    <p className="title">Siêu thị nội thất Sea Furniture</p>
                    <p className="address">
                         Trụ sở chính:{" "}
                         <span
                              dangerouslySetInnerHTML={{
                                   __html: HEADERQUATERS,
                              }}
                         ></span>
                    </p>
                    <p className="phone">Hotline: {HOTLINE}</p>
                    <p className="email">Email: {EMAIL}</p>
               </div>
               <div className="col-2 float-left">
                    <p className="title">VỀ CHÚNG TÔI</p>
                    <ul className="content">
                         {headerBar.map((item, index) => {
                              return (
                                   <Link to={item.to} key={index}>
                                        {item.title[0] +
                                             item.title.slice(1).toLowerCase()}
                                   </Link>
                              );
                         })}
                    </ul>
               </div>
               <div className="col-3">
                    <p className="title">TIN KHUYẾN MÃI</p>
                    <ul className="content">
                         {headerBar.map((item, index) => {
                              return (
                                   <Link to={item.to} key={index}>
                                        {item.title[0] +
                                             item.title.slice(1).toLowerCase()}
                                   </Link>
                              );
                         })}
                    </ul>
               </div>
               <div className="col-4">
                    <p className="title">TỔNG ĐÀI HỖ TRỢ</p>
                    <div className="content">
                         <div className="container-img">
                              <img src={hours24} alt="" />
                         </div>
                         <p>{HOTLINE}</p>
                    </div>
                    <p className="title">NHẬN TIN KHUYẾN MÃI</p>
                    <div className="content">
                         <input placeholder="Nhập email" />
                         <button>Đăng ký</button>
                    </div>
               </div>
          </div>
     );
};

export default MidFooter;
