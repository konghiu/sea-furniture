import React, { startTransition, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
     CHANGE_PASSWORD,
     NOTIFY_ADD,
} from "../../../../common/context/reducer/actions";
import { validPassword } from "../../../../features/feature_regex_sign/feature_regex_sign";
import Input from "../../../signpage/comopnents/input/Input";
import Loading from "../../../../components/loading/Loading";

const UserChangepassword = () => {
     const contextRouter = useOutletContext();
     const account = contextRouter.account;
     const dispatch = contextRouter.dispatch;

     // navigate
     const navigate = useNavigate();

     const [loading, setLoading] = useState(false);

     const [oldPassword, setOldPassword] = useState("");
     const [newPassword, setNewPassword] = useState("");
     const [reNewPassword, setReNewPassword] = useState("");

     const [warning_oldPassword, setWarning_OldPassword] = useState(null);
     const [warning_newPassword, setWarning_NewPassword] = useState(null);
     const [warning_reNewPassword, setWarning_ReNewPassword] = useState(null);

     const handleChangePassword = (...list_pass) => {
          setLoading(true);
          let i = 0;
          while (i < list_pass.length) {
               if (list_pass[i] === "") {
                    setLoading(false);
                    list_pass[++i]({
                         allowed: false,
                         message: "Yêu cầu nhập mật khẩu",
                    });
                    return;
               }
               i += 2;
          }
          if (account.password !== oldPassword) {
               setLoading(false);
               setWarning_OldPassword({
                    allowed: false,
                    message: "Mật khẩu cũ không chính xác.",
               });
               return;
          }
          let allowedPassword = validPassword(newPassword);
          if (!allowedPassword.allowed) {
               setLoading(false);
               setWarning_NewPassword(allowedPassword);
          } else {
               if (reNewPassword !== newPassword) {
                    setLoading(false);
                    setWarning_ReNewPassword({
                         allowed: false,
                         message: "Mật khẩu không trùng khớp.",
                    });
                    return;
               }
               setTimeout(() => {
                    dispatch(
                         CHANGE_PASSWORD({
                              user_ID: account.user_ID,
                              newPassword: newPassword,
                         })
                    );
                    dispatch(
                         NOTIFY_ADD({
                              id: Math.floor(Math.random(1, 10) * 100000),
                              type: "success",
                              message: "Bạn đã đổi mật khẩu thành công",
                         })
                    );
                    setLoading(false);
                    navigate("/sea-furniture/account/");
               }, 500);
          }
     };

     return (
          <div className="change-password">
               {loading && <Loading />}
               <p className="title">ĐỔI MẬT KHẨU</p>
               <p className="my-1">
                    Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8
                    kí tự
               </p>
               <div className="mt-8">
                    <label>Mật khẩu cũ *</label>
                    <Input
                         type="password"
                         placeholder=""
                         handleSetValue={(text) => setOldPassword(text)}
                         warning={warning_oldPassword}
                         handleRemoveWarning={(notify) =>
                              notify ? setWarning_OldPassword(null) : null
                         }
                    />
                    <label>Mật khẩu mới *</label>
                    <Input
                         type="password"
                         placeholder=""
                         handleSetValue={(text) => setNewPassword(text)}
                         warning={warning_newPassword}
                         handleRemoveWarning={(notify) =>
                              notify ? setWarning_NewPassword(null) : null
                         }
                    />
                    <label>Xác nhận lại mật khẩu *</label>
                    <Input
                         type="password"
                         placeholder=""
                         handleSetValue={(text) => setReNewPassword(text)}
                         warning={warning_reNewPassword}
                         handleRemoveWarning={(notify) =>
                              notify ? setWarning_ReNewPassword(null) : null
                         }
                    />
                    <button
                         onClick={() =>
                              handleChangePassword(
                                   oldPassword,
                                   setWarning_OldPassword,
                                   newPassword,
                                   setWarning_NewPassword,
                                   reNewPassword,
                                   setWarning_ReNewPassword
                              )
                         }
                    >
                         Xác nhận
                    </button>
               </div>
          </div>
     );
};

export default UserChangepassword;
