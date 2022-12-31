import React, { useContext, useEffect, useState } from "react";
import context from "../../../../common/context/";
import { ADDRESSES_ADD } from "../../../../common/context/reducer/actions";
import Input from "./Input";

const ModelBoxAddress = (props) => {
     const consumer = useContext(context);
     const dispatch = consumer[1];

     const [closeModel, setCloseModel] = useState(false);

     // address
     const [fullName, setFullName] = useState("");
     const [company, setCompany] = useState("");
     const [address, setAddress] = useState("");
     const [phone, setPhone] = useState("");
     const [zip, setZip] = useState("");

     // checkbox
     const [checkbox, setCheckbox] = useState(false);

     useEffect(() => {
          props.handleCloseModel(closeModel);
     }, [closeModel]);

     const handleAddAddress = () => {
          let address_ = {
               fullName: fullName,
               company: company,
               address: address,
               phone: phone,
               zip: zip,
               default: checkbox,
          };
          dispatch(ADDRESSES_ADD(address_));
          setCloseModel(true);
     };

     return (
          <div className="model-address">
               <span onClick={() => setCloseModel(true)}></span>
               <div className="container-content">
                    <div>
                         <p className="title">THÊM ĐẠI CHỈ MỚI</p>
                         <i
                              className="fa-solid fa-x"
                              onClick={() => setCloseModel(true)}
                         ></i>
                    </div>
                    <div>
                         <Input
                              title="Họ tên"
                              handleSetText={(text) => setFullName(text)}
                         />
                         <Input
                              title="Công ty"
                              handleSetText={(text) => setCompany(text)}
                         />
                         <Input
                              title="Địa chỉ"
                              handleSetText={(text) => setAddress(text)}
                         />
                         <Input
                              title="Số điện thoại"
                              handleSetText={(text) => setPhone(text)}
                         />
                         <Input
                              title="Mã Zip"
                              handleSetText={(text) => setZip(text)}
                         />
                    </div>
                    <div className="">
                         <div className="container-checkbox">
                              <input
                                   type="checkbox"
                                   checked={checkbox}
                                   onChange={() => setCheckbox(!checkbox)}
                              />
                              <label>Đặt làm đại chỉ mặc định</label>
                         </div>
                         <div className="float-right container-button">
                              <button onClick={() => setCloseModel(true)}>
                                   Hủy
                              </button>
                              <button onClick={() => handleAddAddress()}>
                                   Thêm địa chỉ
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ModelBoxAddress;
