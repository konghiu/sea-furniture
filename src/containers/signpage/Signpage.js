import React, { useContext, useEffect } from "react";
import Breadcrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import ContainerHeader from "../../components/header/ContainerHeader";
import button_gg from "../../assets/profile/gp-btn.svg";
import button_fb from "../../assets/profile/fb-btn.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import BackToTop from "../../components/back-to-top/BackToTop";
import feature_return_top from "../../features/feature_return_top";
import ComponentWaitLoad from "../../components/loading/ComponentWaitLoad";
import "./sign-page.css";
import context from "../../common/context";

const Signpage = () => {
     const location = useLocation();
     const consumer = useContext(context);
     const account = consumer[0].user_account;

     useEffect(() => {
          feature_return_top();
          console.log(location.pathname);
     }, [location.pathname]);

     return (
          <div className="sign-page">
               <ContainerHeader />
               <Breadcrum />
               {Object.keys(account).length === 0 ? (
                    <div className="content">
                         <p className="title">
                              ĐĂNG
                              {location.pathname.includes("register")
                                   ? " KÝ"
                                   : " NHẬP"}
                         </p>
                         <div className="available-login">
                              <img src={button_gg} alt="" />
                              <img src={button_fb} alt="" />
                         </div>
                         <Outlet />
                    </div>
               ) : (
                    <div className="my-10">
                         <p>
                              Bạn đã đăng nhập. Click{" "}
                              <Link
                                   to="/sea-furniture/account"
                                   className="underline cursor-pointer font-semibold"
                              >
                                   tại đây
                              </Link>{" "}
                              để đến trang tài khoản
                         </p>
                    </div>
               )}
               <Footer />
               {/* back to top */}

               <BackToTop />
          </div>
     );
};

export default Signpage;
