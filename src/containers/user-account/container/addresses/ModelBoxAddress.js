import React, { useContext, useEffect, useState } from "react";
import context from "../../../../common/context/";
import Loading from "../../../../components/loading/Loading";
import {
     ADDRESSES_ADD,
     USER_LOGIN,
} from "../../../../common/context/reducer/actions";
import Input from "./Input";

const ModelBoxAddress = (props) => {
     const consumer = useContext(context);
     const account = consumer[0].user_account;
     const dispatch = consumer[1];

     const [closeModel, setCloseModel] = useState(false);

     // address
     const [fullName, setFullName] = useState("");
     const [company, setCompany] = useState("");
     const [phone, setPhone] = useState("");
     const [address, setAddress] = useState("");
     const [district, setDistrict] = useState("");
     const [city, setCity] = useState("");
     const [zip, setZip] = useState("");

     // checkbox
     const [checkbox, setCheckbox] = useState(false);

     // loading when handle anything
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          props.handleCloseModel(closeModel);
     }, [closeModel]);

     const handleAddAddress = () => {
          setLoading(true);
          let address_ = {
               id: account.user_list_address.length,
               fullName: fullName || account.user_name,
               company: company,
               address: address,
               district: district,
               city: city,
               phone: phone || account.user_phone,
               zip: zip,
               default: checkbox,
          };
          dispatch(
               ADDRESSES_ADD({
                    user_ID: account.user_ID,
                    address: address_,
               })
          );
          // fetch("/api/users/address/" + account.user_ID, {
          //      method: "post",
          //      body: JSON.stringify(address_),
          // })
          //      .then((res) => res.json())
          //      .then((res) => {
          //           if (res.users) {
          //                dispatch(USER_LOGIN(res.users));
          //           }
          //      });
          setTimeout(() => {
               setCloseModel(true);
          }, 500);
     };

     return (
          <div className="model-address">
               {loading ? <Loading /> : null}
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
                              title="Số điện thoại"
                              handleSetText={(text) => setPhone(text)}
                         />
                         <Input
                              title="Địa chỉ"
                              handleSetText={(text) => setAddress(text)}
                         />
                         <Input
                              title="Quận / huyện"
                              handleSetText={(text) => setDistrict(text)}
                         />
                         <Input
                              title="Tỉnh / thành"
                              handleSetText={(text) => setCity(text)}
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
