import React, { useContext, useEffect, useState } from "react";
import ComponentWaitLoad from "../../components/loading/ComponentWaitLoad";
import SectionCategory from "./section-category/SectionCategory";
import { Link, Outlet } from "react-router-dom";
import context from "../../common/context";
import "./user-account-page.css";

const UserAccountpage = () => {
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

     return (
          <div className="container-user-account">
               <div className="content">
                    {account ? (
                         <React.Fragment>
                              <SectionCategory account={account} />
                              <Outlet
                                   context={{
                                        account,
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
          </div>
     );
};

export default UserAccountpage;
