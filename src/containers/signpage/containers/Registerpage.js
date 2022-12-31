import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../comopnents/input/Input";
import {
     validEmailOrPhone,
     validPassword,
     validUserName,
} from "../../../features/feature_regex_sign/feature_regex_sign.js";

const Registerpage = () => {
     const navigate = useNavigate();

     const [valueUsername, setValueUsername] = useState("");
     const [valueEmail, setValueEmail] = useState("");
     const [valuePhone, setValueRePhone] = useState("");
     const [valuePassword, setValuePassword] = useState("");

     const [warning_username, setWarning_username] = useState(null);
     const [warning_email, setWarning_email] = useState(null);
     const [warning_phone, setWarning_phone] = useState(null);
     const [warning_password, setWarning_password] = useState(null);

     const handleValidInfoUser = async () => {
          let allowedUsername;
          let allowEmail;
          let allowedPhone;
          let allowedPassword;

          let counter = 0;

          allowedUsername = validUserName(valueUsername);
          setWarning_username(allowedUsername);

          if (!allowedUsername.allowed) return;
          ++counter;

          allowEmail = validEmailOrPhone(valueEmail);
          setWarning_email(allowEmail);

          if (!allowEmail.allowed) return;
          ++counter;

          allowedPhone = validEmailOrPhone(valuePhone);
          setWarning_phone(allowedPhone);

          if (!allowedPhone.allowed) return;
          ++counter;

          allowedPassword = validPassword(valuePassword);
          setWarning_password(allowedPassword);
          ++counter;

          await fetch("/api/users", {
               method: "get",
          })
               .then((res) => res.json())
               .then((res) => {
                    for (let i = 0; i < res.users.length; i++) {
                         if (res.users[i].user_email === valueEmail) {
                              setWarning_email({
                                   allowed: false,
                                   message: "Email đã được dùng đăng ký.",
                              });
                              --counter;
                              return;
                         } else if (res.users[i].user_phone === valuePhone) {
                              setWarning_phone({
                                   allowed: false,
                                   message: "Số điện thoại đã được dùng đăng ký.",
                              });
                              --counter;
                              return;
                         }
                    }
               });

          if (counter === 4) {
               console.log("login success...");
               navigate("/sea-furniture/account");
               return;
          }
          console.log("login failed...");
     };

     return (
          <React.Fragment>
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
