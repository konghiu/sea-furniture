import React, { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
     ADDRESSES_CHANGE_DEFAULT,
     ADDRESSES_REMOVE,
     USER_LOGIN,
} from "../../../../common/context/reducer/actions";
import ModelBoxAddress from "./ModelBoxAddress";
import "./addresses.css";
import Loading from "../../../../components/loading/Loading";

const UserAddresses = () => {
     const contextRouter = useOutletContext();
     const account = contextRouter.account;
     const dispatch = contextRouter.dispatch;
     console.log(account);

     const [openModel, setOpenModel] = useState(false);

     // loading when update
     const [loading, setLoading] = useState(false);

     const handleChoseDefault = (index) => {
          setLoading(true);
          // fetch("/api/users/address/default/" + account.user_ID, {
          //      method: "post",
          //      body: JSON.stringify({
          //           index: index,
          //      }),
          // })
          //      .then((res) => res.json())
          //      .then((res) => {
          //           if (res.users) {
          //                dispatch(USER_LOGIN(res.users));
          //           }
          //      });
          setTimeout(() => {
               dispatch(
                    ADDRESSES_CHANGE_DEFAULT({
                         user_ID: account.user_ID,
                         index_adr: index,
                    })
               );
               setLoading(false);
          }, 500);
     };

     const handleRemoveAddress = (index) => {
          setLoading(true);
          setTimeout(() => {
               dispatch(
                    ADDRESSES_REMOVE({
                         user_ID: account.user_ID,
                         index_adr: index,
                    })
               );
               setLoading(false);
          }, 500);
          // fetch("/api/users/address/remove/" + account.user_ID, {
          //      method: "post",
          //      body: JSON.stringify({
          //           index: index,
          //      }),
          // })
          //      .then((res) => res.json())
          //      .then((res) => {
          //           if (res.users) {
          //                dispatch(USER_LOGIN(res.users));
          //           }
          //      });
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
                    {account.user_list_address.length > 0 ? (
                         <div className="addresses">
                              {account.user_list_address.map(
                                   (info_adr, index) => (
                                        <div className="address" key={index}>
                                             <ul>
                                                  <li>
                                                       <span>Họ tên: </span>
                                                       {info_adr.fullName}
                                                  </li>
                                                  {info_adr.company !== "" ? (
                                                       <li>
                                                            <span>
                                                                 Địa chỉ:{" "}
                                                            </span>
                                                            {info_adr.company}
                                                       </li>
                                                  ) : null}
                                                  {info_adr.address !== "" ? (
                                                       <li>
                                                            <span>
                                                                 Địa chỉ:{" "}
                                                            </span>
                                                            {info_adr.address}
                                                       </li>
                                                  ) : null}
                                                  <li>
                                                       <span>
                                                            Số điện thoại:{" "}
                                                       </span>
                                                       {info_adr.phone}
                                                  </li>
                                                  {info_adr.zip !== "" ? (
                                                       <li>
                                                            <span>
                                                                 Mã Zip:{" "}
                                                            </span>
                                                            {info_adr.zip}
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
                                                                 info_adr.default
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
