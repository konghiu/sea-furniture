import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import context from "../../../common/context";
import { USER_LOGIN } from "../../../common/context/reducer/actions";
import { format_null_input } from "../../../features/feature_regex_sign/feature_regex_sign";
import Input from "../comopnents/input/Input";

const Loginpage = () => {
     const consumer = useContext(context);
     const dispatch = consumer[1];

     // direction
     const navigate = useNavigate();

     const [valueAccount, setValueAccount] = useState("");
     const [valuePassword, setValuePassword] = useState("");
     // const [valueRePassword, setValueRePassword] = useState("");

     const [warning_account, setWarning_account] = useState(null);
     const [warning_password, setWarning_password] = useState(null);
     // const [warning_rePassword, setWarning_rePassword] = useState("");

     const handleLogin = async () => {
          const infoUser = {
               account: valueAccount,
               password: valuePassword,
          };

          if (valueAccount.length === 0) {
               setWarning_account(format_null_input);
               return;
          }

          if (valuePassword.length === 0) {
               setWarning_password(format_null_input);
               return;
          }

          await fetch("/api/users", {
               method: "get",
          })
               .then((res) => res.json())
               .then((res) => {
                    const list_user = res.users;
                    let get_username = {
                         get: false,
                         value: "",
                         message: "Email hoặc số điện thoại này không tồn tại.",
                    };

                    let check_password = {
                         check: false,
                         value: "",
                         message: "Mật khẩu sai. Yêu cầu nhập lại",
                    };

                    let i;
                    for (i = 0; i < list_user.length; i++) {
                         let checkEmail;
                         let checkPhone;
                         if (infoUser.account.includes("@")) {
                              checkEmail =
                                   list_user[i].user_email === infoUser.account;
                         } else {
                              checkPhone =
                                   list_user[i].user_phone === infoUser.account;
                         }
                         if (checkEmail || checkPhone) {
                              get_username = {
                                   get: true,
                                   value: list_user[i].user_email,
                                   message: "",
                              };
                              break;
                         }
                    }
                    if (!get_username.get) {
                         return setWarning_account({
                              allowed: false,
                              message: get_username.message,
                         });
                    }

                    if (list_user[i].password === infoUser.password) {
                         // login
                         console.log("login...");
                         dispatch(USER_LOGIN(list_user[i]));
                         navigate("/sea-furniture/account");
                    } else {
                         return setWarning_password({
                              allowed: false,
                              message: check_password.message,
                         });
                    }
               });
     };

     return (
          <React.Fragment>
               <Input
                    type="text"
                    placeholder="Tài khoản"
                    handleSetValue={(text) => setValueAccount(text)}
                    warning={warning_account}
                    handleRemoveWarning={(notify) =>
                         notify ? setWarning_account(null) : null
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
               {/* <Input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    handleSetValue={(text) => setValueRePassword(text)}
                    wanring={warning_rePassword}
               /> */}
               <div className="pattern-button" onClick={() => handleLogin()}>
                    <button>Đăng nhập</button>
               </div>
               <p>
                    Bạn chưa có tài khoản, vui lòng đăng ký{" "}
                    <Link
                         to="/sea-furniture/sign/register"
                         className="click underline"
                    >
                         tại đây
                    </Link>
               </p>
          </React.Fragment>
     );
};

export default Loginpage;
