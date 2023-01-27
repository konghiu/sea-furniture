import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import context from "../../common/context";
import slugify from "react-slugify";
import "./breadcrum-background.css";

const pathname = [
     "introduction",
     "products",
     "all",
     "products/sofa",
     "products/ghe",
     "products/trang-tri",
     "products/ke",
     "products/tu",
     "products/ban",
     "news",
     "contacts",
     "sign/register",
     "sign/login",
     "cart",
     "account",
     "account/transaction",
     "account/changepassword",
     "account/addresses",
     "payment",
];
const pathname_abs = [
     "Giới thiệu",
     "Tất cả sản phẩm",
     "Tất cả sản phẩm",
     "Sofa",
     "Ghế",
     "Trang trí",
     "Kệ sách",
     "Tủ quần áo",
     "Bàn",
     "Tin tức",
     "Liên hệ",
     "Đăng ký tài khoản",
     "Đăng nhập tài khoản",
     "Giỏ hàng",
     "Thông tin tài khoản",
     "Đơn hàng của bạn",
     "Đổi mật khẩu",
     "Số địa chỉ",
     "Thanh toán",
];

const Breadcrum = () => {
     const consumer = useContext(context);
     const products_list = consumer[0].products_list;
     const news_list = consumer[0].news_list;

     const location = useLocation();

     const [currentPage, setCurrentPage] = useState(null);

     useEffect(() => {
          let find;
          find = pathname.findIndex((item) => {
               return location.pathname.replace("/sea-furniture/", "") === item;
          });
          if (find === -1) {
               if (
                    location.pathname.includes("products") === true &&
                    location.pathname.includes("search") === false &&
                    products_list &&
                    products_list.length > 0
               ) {
                    find = products_list.findIndex(
                         (item) => location.pathname.includes(item.url) === true
                    );
                    setCurrentPage(["Sản phẩm", products_list[find].name]);
               } else if (
                    location.pathname.includes("news") === true &&
                    news_list &&
                    news_list.length > 0
               ) {
                    find = news_list.findIndex((item) => {
                         const slg_url = slugify(item.title, {
                              lower: true,
                              strict: true,
                              locale: "vi",
                         });
                         return location.pathname.includes(slg_url) === true;
                    });
                    setCurrentPage(["Tin tức", news_list[find].title]);
               } else if (location.pathname.includes("search") === true) {
                    setCurrentPage([
                         "Tìm kiếm",
                         location.pathname.replace(
                              "/sea-furniture/products/search/",
                              ""
                         ),
                    ]);
               }
               return;
          }
          setCurrentPage([pathname_abs[find]]);
          return () => {
               setCurrentPage(null);
          };
     }, [location.pathname]);

     return (
          <div className="breadcrum-background">
               <p className="title font-semibold px-4">
                    {currentPage ? currentPage[currentPage.length - 1] : ""}
               </p>
               <div className="w-5/6 flex flex-wrap justify-center items-center mt-3">
                    <Link
                         to={"/sea-furniture/homepage"}
                         className="hover:underline cursor-pointer"
                    >
                         Trang chủ
                    </Link>
                    <>
                         {currentPage
                              ? currentPage.map((item, index) => (
                                     <p
                                          className="main-color font-semibold"
                                          key={index}
                                     >
                                          <i className="fa-solid fa-chevron-right mx-5 text-green-500"></i>
                                          <span>{item}</span>
                                     </p>
                                ))
                              : null}
                    </>
               </div>
          </div>
     );
};

export default Breadcrum;
