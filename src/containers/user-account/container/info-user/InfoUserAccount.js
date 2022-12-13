import React from "react";
import { useOutletContext } from "react-router-dom";
import "./info-user.css";

const InfoUserAccount = () => {
     const account = useOutletContext();

     return (
          <div className="info-user">
               <p className="title">THÔNG TIN TÀI KHOẢN</p>
               <div>
                    <p className="full-name">
                         Họ tên: <span>{account.user_name}</span>
                    </p>
                    <p className="email">
                         Email: <span>{account.user_email}</span>
                    </p>
               </div>
          </div>
     );
};

export default InfoUserAccount;
