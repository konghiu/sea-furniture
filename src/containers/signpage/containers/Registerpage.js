import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Input from "../comopnents/input/Input";
import {
     validEmailOrPhone,
     validPassword,
     validUserName,
} from "../../../features/feature_regex_sign/feature_regex_sign.js";
import { USER_REGISTER } from "../../../common/context/reducer/actions";
import Loading from "../../../components/loading/Loading";

const Registerpage = () => {
     const navigate = useNavigate();

     const contextRouter = useOutletContext();
     const users_list = contextRouter.users_list;
     const dispatch = contextRouter.dispatch;

     const [loading, setLoading] = useState(false);

     const [valueUsername, setValueUsername] = useState("");
     const [valueEmail, setValueEmail] = useState("");
     const [valuePhone, setValueRePhone] = useState("");
     const [valuePassword, setValuePassword] = useState("");

     const [warning_username, setWarning_username] = useState(null);
     const [warning_email, setWarning_email] = useState(null);
     const [warning_phone, setWarning_phone] = useState(null);
     const [warning_password, setWarning_password] = useState(null);

     const handleValidInfoUser = async () => {
          let createUser = {
               user_ID: 0,
               user_avatar: null,
               user_name: valueUsername,
               user_email: valueEmail,
               user_phone: valuePhone,
               password: valuePassword,
               user_cart: [],
               user_list_address: [],
               transaction: [],
          };

          let allowedUsername;
          let allowEmail;
          let allowedPhone;
          let allowedPassword;

          allowedUsername = validUserName(valueUsername);

          // return neu ten sai cu phap
          if (!allowedUsername.allowed)
               return setWarning_username(allowedUsername);

          allowEmail = validEmailOrPhone(valueEmail);

          // return neu email trung hoac sai cu phap
          if (!allowEmail.allowed) return setWarning_email(allowEmail);

          allowedPhone = validEmailOrPhone(valuePhone);

          // return neu phone trung hoac sai cu phap
          if (!allowedPhone.allowed) return setWarning_phone(allowedPhone);

          allowedPassword = validPassword(valuePassword);

          // return neu password sai cu phap
          if (!allowedPassword.allowed)
               return setWarning_password(allowedPassword);

          // await fetch("/api/users", {
          //      method: "get",
          // })
          //      .then((res) => res.json())
          //      .then((res) => {
          setLoading(true);
          for (let i = 0; i < users_list.length; i++) {
               if (users_list[i].user_email === valueEmail) {
                    setWarning_email({
                         allowed: false,
                         message: "Email đã được dùng đăng ký.",
                    });
                    setLoading(false);
                    return;
               } else if (users_list[i].user_phone === valuePhone) {
                    setWarning_phone({
                         allowed: false,
                         message: "Số điện thoại đã được dùng đăng ký.",
                    });
                    setLoading(false);
                    return;
               }
          }
          // });

          dispatch(USER_REGISTER(createUser));
          setTimeout(() => {
               setLoading(false);
               navigate("/sea-furniture/sign/login");
          }, 1000);
          return;
     };

     return (
          <React.Fragment>
               {loading && <Loading />}
               <Input
                    type="text"
                    placeholder="Họ và tên"
                    handleSetValue={(text) => setValueUsername(text)}
                    warning={warning_username}
                    handleRemoveWarning={(notify) =>
                         notify ? setWarning_username(null) : null
                    }
               />
               <Input
                    type="email"
                    placeholder="Email"
                    handleSetValue={(text) => setValueEmail(text)}
                    warning={warning_email}
                    handleRemoveWarning={(notify) =>
                         notify ? setWarning_email(null) : null
                    }
               />
               <Input
                    type="text"
                    placeholder="Số điện thoại"
                    handleSetValue={(text) => setValueRePhone(text)}
                    warning={warning_phone}
                    handleRemoveWarning={(notify) =>
                         notify ? setWarning_phone(null) : null
                    }
               />
               <Input
                    type="password"
                    placeholder="Mật khẩu"
                    handleSetValue={(text) => setValuePassword(text)}
                    warning={warning_password}
                    handleRemoveWarning={(notify) =>
                         notify ? setWarning_password(null) : null
                    }
               />
               <div
                    className="pattern-button"
                    onClick={(e) => handleValidInfoUser(e.target.value)}
               >
                    <button>Đăng ký</button>
               </div>
               <p>
                    Bạn đã có tài khoản, vui lòng đăng nhập{" "}
                    <Link
                         to="/sea-furniture/sign/login"
                         className="click underline"
                    >
                         tại đây
                    </Link>
               </p>
          </React.Fragment>
     );
};

export default Registerpage;
