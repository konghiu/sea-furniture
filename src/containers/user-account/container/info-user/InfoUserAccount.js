import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import blank_avatar from "../../../../assets/profile/blank_avatar.webp";
import { NOTIFY_ADD } from "../../../../common/context/reducer/actions";
import Loading from "../../../../components/loading/Loading";
import "./info-user.css";

const InfoUserAccount = () => {
     const outletContent = useOutletContext();
     const account = outletContent.account;
     const dispatch = outletContent.dispatch;

     const [isLoading, setIsLoading] = useState(false);
     const [changeAvatar, setChangeAvatar] = useState(
          account.user_avatar ? account.user_avatar : blank_avatar
     );

     const handleGetFile = (e) => {
          setIsLoading(true);
          if (e.target) {
               const file = e.target.files[0];
               file.preview = URL.createObjectURL(file);
               setTimeout(() => {
                    setChangeAvatar(file.preview);
                    dispatch(
                         NOTIFY_ADD({
                              id: 2,
                              type: "success",
                              message: "Bạn đã đổi ảnh thành công.",
                         })
                    );
                    setIsLoading(false);
               }, 1000);
               return;
          }
          setIsLoading(false);
     };

     const handleRemoveAvatar = () => {
          setIsLoading(true);
          if (changeAvatar !== blank_avatar) {
               setTimeout(() => {
                    setChangeAvatar(blank_avatar);
                    dispatch(
                         NOTIFY_ADD({
                              id: 3,
                              type: "success",
                              message: "Bạn đã xóa ảnh thành công.",
                         })
                    );
                    setIsLoading(false);
               }, 1000);
               return;
          }
          dispatch(
               NOTIFY_ADD({
                    id: 4,
                    type: "error",
                    message: "Bạn không có ảnh đại diện.",
               })
          );
          setIsLoading(false);
     };

     return (
          <div className="info-user">
               {isLoading && <Loading />}
               <p className="title">THÔNG TIN TÀI KHOẢN</p>
               <div className="content flex">
                    <div className="container_avatar-change">
                         <div className="container_avatar">
                              <img src={changeAvatar} alt="" />
                         </div>
                         <div className="container_change">
                              <label
                                   htmlFor="file-upload"
                                   className="custom-file-upload"
                              >
                                   Đổi ảnh
                              </label>
                              <input
                                   id="file-upload"
                                   type="file"
                                   onChange={(e) => handleGetFile(e)}
                                   accept={"image/jpeg, image/jpg, image/webp"}
                              />
                              <button onClick={() => handleRemoveAvatar()}>
                                   Gỡ ảnh
                              </button>
                         </div>
                    </div>
                    <div className="info">
                         <p className="full-name">
                              Họ tên: <span>{account.user_name}</span>
                         </p>
                         <p className="email">
                              Email: <span>{account.user_email}</span>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default InfoUserAccount;
