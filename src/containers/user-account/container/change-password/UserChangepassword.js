import React, { useState } from "react";
import Input from "../../../signpage/comopnents/input/Input";

const UserChangepassword = () => {
     const [oldPassword, setOldPassword] = useState("");
     const [newPassword, setNewPassword] = useState("");
     const [reNewPassword, setReNewPassword] = useState("");

     const [warning_oldPassword, setWarning_OldPassword] = useState("");
     const [warning_newPassword, setWarning_NewPassword] = useState("");
     const [warning_reNewPassword, setWarning_ReNewPassword] = useState("");

     return (
          <div className="change-password">
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
                    <button className="">Xác nhận</button>
               </div>
          </div>
     );
};

export default UserChangepassword;
