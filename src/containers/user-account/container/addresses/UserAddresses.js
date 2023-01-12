import React, { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { USER_LOGIN } from "../../../../common/context/reducer/actions";
import ModelBoxAddress from "./ModelBoxAddress";
import context from "../../../../common/context";
import "./addresses.css";
import Loading from "../../../../components/loading/Loading";

const UserAddresses = () => {
     const contexts = useOutletContext();
     const consumer = useContext(context);
     const dispatch = consumer[1];

     const [openModel, setOpenModel] = useState(false);

     // loading when update
     const [loading, setLoading] = useState(false);

     const handleChoseDefault = (index) => {
          setLoading(true);
          fetch("/api/users/address/default/" + contexts.account.user_ID, {
               method: "post",
               body: JSON.stringify({
                    index: index,
               }),
          })
               .then((res) => res.json())
               .then((res) => {
                    if (res.users) {
                         dispatch(USER_LOGIN(res.users));
                    }
               });
          setTimeout(() => {
               setLoading(false);
          }, 500);
     };

     const handleRemoveAddress = (index) => {
          setLoading(true);
          fetch("/api/users/address/remove/" + contexts.account.user_ID, {
               method: "post",
               body: JSON.stringify({
                    index: index,
               }),
          })
               .then((res) => res.json())
               .then((res) => {
                    if (res.users) {
                         dispatch(USER_LOGIN(res.users));
                    }
               });
          setTimeout(() => {
               setLoading(false);
          }, 500);
     };

     return (
          <div className="container-addresses">
               {loading ? <Loading /> : null}
               <div className="row-1">
                    <p className="title">ĐỊA CHỈ CỦA BẠN</p>
                    <button onClick={() => setOpenModel(true)}>
                         Thêm đại chỉ
                    </button>
               </div>
               <div className="row-2">
                    {contexts.account.user_list_address.length > 0 ? (
                         <div className="addresses">
                              {contexts.account.user_list_address.map(
                                   (item, index) => (
                                        <div className="address" key={index}>
                                             <ul>
                                                  <li>
                                                       <span>Họ tên: </span>
                                                       {item.fullName !== ""
                                                            ? item.fullName
                                                            : contexts.account
                                                                   .user_name}
                                                  </li>
                                                  {item.company !== "" ? (
                                                       <li>
                                                            <span>
                                                                 Địa chỉ:{" "}
                                                            </span>
                                                            {item.company}
                                                       </li>
                                                  ) : null}
                                                  {item.address !== "" ? (
                                                       <li>
                                                            <span>
                                                                 Địa chỉ:{" "}
                                                            </span>
                                                            {item.address}
                                                       </li>
                                                  ) : null}
                                                  <li>
                                                       <span>
                                                            Số điện thoại:{" "}
                                                       </span>
                                                       {item.phone !== ""
                                                            ? item.phone
                                                            : contexts.account
                                                                   .user_phone}
                                                  </li>
                                                  {item.zip !== "" ? (
                                                       <li>
                                                            <span>
                                                                 Mã Zip:{" "}
                                                            </span>
                                                            {item.zip}
                                                       </li>
                                                  ) : null}
                                             </ul>
                                             <div className="option">
                                                  <div className="flex items-center mb-2">
                                                       <i
                                                            className="fa-solid fa-x cursor-pointer"
                                                            onClick={() =>
                                                                 handleRemoveAddress(
                                                                      index
                                                                 )
                                                            }
                                                       ></i>
                                                       <span className="ml-2 text-red-400">
                                                            xóa
                                                       </span>
                                                  </div>
                                                  <div>
                                                       <input
                                                            type="checkbox"
                                                            checked={
                                                                 item.default
                                                            }
                                                            onChange={() =>
                                                                 handleChoseDefault(
                                                                      index
                                                                 )
                                                            }
                                                       />
                                                       <span className="ml-2 text-green-400">
                                                            mặc định
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   )
                              )}
                         </div>
                    ) : null}
               </div>
               {openModel && (
                    <ModelBoxAddress
                         handleCloseModel={(close) => setOpenModel(!close)}
                    />
               )}
          </div>
     );
};

export default UserAddresses;
