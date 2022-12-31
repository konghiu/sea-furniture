import React, { useContext, useEffect } from "react";
import Breadcrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import ContainerHeader from "../../components/header/ContainerHeader";
import button_gg from "../../assets/profile/gp-btn.svg";
import button_fb from "../../assets/profile/fb-btn.svg";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import BackToTop from "../../components/back-to-top/BackToTop";
import feature_return_top from "../../features/feature_return_top";
import ComponentWaitLoad from "../../components/loading/ComponentWaitLoad";
import "./sign-page.css";
import context from "../../common/context";
import { NOTIFY_ADD, USER_LOGIN } from "../../common/context/reducer/actions";

const Signpage = () => {
     const location = useLocation();
     const navigate = useNavigate();
     const consumer = useContext(context);
     const account = consumer[0].user_account;
     const notify_for_user = consumer[0].notify_for_user;
     const dispatch = consumer[1];

     useEffect(() => {
          if (location.pathname.includes("logout")) {
               dispatch(USER_LOGIN(null));
               navigate("/sea-furniture/sign");
               return;
          }
          return () => {
               feature_return_top();
          };
     }, [location.pathname]);

     const handleLoginAvailable = (account_available) => {
          dispatch(
               NOTIFY_ADD({
                    id: notify_for_user.length * 10,
                    type: "error",
                    message: `Không thể đăng nhập bằng ${account_available}.`,
               })
          );
     };

     return (
          <div className="sign-page">
               <ContainerHeader />
               <Breadcrum />
               {!account ? (
                    <div className="content">
                         {location.pathname.includes("logout") ? null : (
                              <React.Fragment>
                                   <p className="title">
                                        ĐĂNG
                                        {location.pathname.includes("register")
                                             ? " KÝ"
                                             : " NHẬP"}
                                   </p>
                                   <div className="available-login">
                                        <img
                                             src={button_gg}
                                             alt=""
                                             onClick={() =>
                                                  handleLoginAvailable("Google")
                                             }
                                        />
                                        <img
                                             src={button_fb}
                                             alt=""
                                             onClick={() =>
                                                  handleLoginAvailable(
                                                       "Facebook"
                                                  )
                                             }
                                        />
                                   </div>
                              </React.Fragment>
                         )}
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
