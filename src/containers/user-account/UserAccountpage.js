import React, { useContext, useEffect, useState } from "react";
import ContainerHeader from "../../components/header/ContainerHeader";
import BreadCrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import ComponentWaitLoad from "../../components/loading/ComponentWaitLoad";
import SectionCategory from "./section-category/SectionCategory";
import { Link, Outlet } from "react-router-dom";
import "./user-account-page.css";
import context from "../../common/context";

const UserAccountpage = () => {
     const consumer = useContext(context);
     const account = consumer[0].user_account;
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          setTimeout(() => {
               if (Object.keys(account).length === 0) {
                    console.log("Bạn chưa đăng nhập");
                    setLoading(false);
               }
          }, 5000);
     }, []);

     return (
          <div className="container-user-account">
               <ContainerHeader />
               <BreadCrum />
               <div className="content">
                    {Object.keys(account).length !== 0 ? (
                         <React.Fragment>
                              <SectionCategory account={account} />
                              <Outlet context={account} />
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
