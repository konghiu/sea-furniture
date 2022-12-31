import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
     ADDRESSES_CHANGE_DEFAULT,
     ADDRESSES_REMOVE,
} from "../../../../common/context/reducer/actions";
import ModelBoxAddress from "./ModelBoxAddress";
import context from "../../../../common/context";
import "./addresses.css";

const UserAddresses = () => {
     const contexts = useOutletContext();
     const consumer = useContext(context);
     const dispatch = consumer[1];

     const [openModel, setOpenModel] = useState(false);

     const [choseDefault, setChoseDefault] = useState();

     console.log(choseDefault);
     useEffect(() => {
          dispatch(ADDRESSES_CHANGE_DEFAULT(choseDefault));
     }, [choseDefault]);

     const handleRemoveAddress = (index) => {
          console.log(index);
          dispatch(ADDRESSES_REMOVE(index));
     };

     return (
          <div className="container-addresses">
               <div className="row-1">
                    <p className="title">ĐỊA CHỈ CỦA BẠN</p>
                    <button onClick={() => setOpenModel(true)}>
                         Thêm đại chỉ
                    </button>
               </div>
               <div className="row-2">
                    {contexts.addresses.length > 0 ? (
                         <div className="addresses">
                              {contexts.addresses.map((item, index) => (
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
                                                       <span>Địa chỉ: </span>
                                                       {item.company}
                                                  </li>
                                             ) : null}
                                             {item.address !== "" ? (
                                                  <li>
                                                       <span>Địa chỉ: </span>
                                                       {item.address}
                                                  </li>
                                             ) : null}
                                             <li>
                                                  <span>Số điện thoại: </span>
                                                  {item.phone !== ""
                                                       ? item.phone
                                                       : contexts.account
                                                              .user_phone}
                                             </li>
                                             {item.zip !== "" ? (
                                                  <li>
                                                       <span>Mã Zip: </span>
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
                                                       checked={item.default}
                                                       onChange={() =>
                                                            setChoseDefault(
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
                              ))}
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
