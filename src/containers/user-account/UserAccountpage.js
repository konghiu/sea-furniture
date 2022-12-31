import React, { useContext, useEffect, useState } from "react";
import ContainerHeader from "../../components/header/ContainerHeader";
import BreadCrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import ComponentWaitLoad from "../../components/loading/ComponentWaitLoad";
import SectionCategory from "./section-category/SectionCategory";
import { Link, Outlet, useLocation } from "react-router-dom";
import feature_return_top from "../../features/feature_return_top";
import "./user-account-page.css";
import context from "../../common/context";

const UserAccountpage = () => {
     const location = useLocation();

     const consumer = useContext(context);
     const account = consumer[0].user_account;
     const addresses = consumer[0].user_addresses;
     const dispatch = consumer[1];
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          setTimeout(() => {
               if (account === null) {
                    console.log("Bạn chưa đăng nhập");
                    setLoading(false);
               }
          }, 2500);
     }, []);

     useEffect(() => {
          return () => {
               feature_return_top();
          };
     }, [location.pathname]);

     return (
          <div className="container-user-account">
               <ContainerHeader />
               <BreadCrum />
               <div className="content">
                    {account ? (
                         <React.Fragment>
                              <SectionCategory account={account} />
                              <Outlet
                                   context={{
                                        account,
                                        addresses,
                                        dispatch,
                                   }}
                              />
                         </React.Fragment>
                    ) : loading ? (
                         <ComponentWaitLoad />
                    ) : (
                         <p>
                              Bạn chưa có tài khoản. Yêu cầu đăng nhập{" "}
                              <Link to="/sea-furniture/sign/login">
                                   tại đây
                              </Link>
                         </p>
                    )}
               </div>
               <Footer />
          </div>
     );
};

export default UserAccountpage;
