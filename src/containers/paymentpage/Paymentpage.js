import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import context from "../../common/context";
import {
     BUYPRODUCT,
     CLEAR_PRODUCT,
     NOTIFY_ADD,
     USER_LOGIN,
} from "../../common/context/reducer/actions";
import ComponentWaitLoad from "../../components/loading/ComponentWaitLoad";
import Loading from "../../components/loading/Loading";
import "./payment-page.css";

const Paymentpage = () => {
     const navigate = useNavigate();

     const consumer = useContext(context);
     const dispatch = consumer[1];
     const buy_product = consumer[0].buy_product;
     const user_cart = consumer[0].user_cart;
     const account = consumer[0].user_account;

     // thong tin nguoi dat hang
     const [fullName, setFullName] = useState("");
     const [phone, setPhone] = useState("");
     const [address, setAddress] = useState("");
     const [district, setDistrict] = useState("");
     const [city, setCity] = useState("");
     const [zip, setZip] = useState("");

     // check allow
     const [checkbox, setCheckbox] = useState(false);

     const [products, setProducts] = useState(null);

     // loading when payment
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          if (account && account.user_list_address.length > 0) {
               let find = account.user_list_address.findIndex((item) => {
                    return item.default === true;
               });
               const addressDefault = account.user_list_address[find];
               setFullName(addressDefault.fullName);
               setPhone(addressDefault.phone);
               setAddress(addressDefault.address);
               setDistrict(addressDefault.district);
               setCity(addressDefault.city);
               setZip(address.zip);
          }
     }, [account.user_list_address]);

     useEffect(() => {
          if (user_cart.length <= 0 && buy_product === null) {
               navigate("/sea-furniture/cart");
          } else if (buy_product) {
               setProducts([buy_product.product]);
               dispatch(BUYPRODUCT(null));
               return;
          } else if (user_cart.length > 0) {
               setProducts(user_cart);
          }
     }, [user_cart]);

     const totalPrice = useMemo(() => {
          let total = 0;
          if (products) {
               products.forEach((item) => {
                    total += item.quantity * item.price;
               });
          }
          return total;
     }, [products]);

     const handlePayment = () => {
          setLoading(true);
          if (
               fullName === "" ||
               phone === "" ||
               address === "" ||
               district === "" ||
               city === ""
          ) {
               dispatch(
                    NOTIFY_ADD({
                         id: Math.floor(Math.random(1, 10) * 1000000),
                         type: "error",
                         message: "Yêu cầu điền đầy đủ thông tin trước khi mua hàng",
                    })
               );
          } else {
               if (checkbox === true) {
                    const date = new Date();
                    const day = date.getDay();
                    const month = date.getMonth();
                    const year = date.getFullYear();
                    const create_order = {
                         code: Math.floor(Math.random(1, 10) * 10000),
                         date: `${day}/${month}/${year}`,
                         address: `${address}, ${district}, ${city}`,
                         totalPrice: totalPrice,
                         paymentPrice: totalPrice,
                         transferPrice: 0,
                    };

                    fetch("/api/users/transaction/" + account.user_ID, {
                         method: "post",
                         body: JSON.stringify(create_order),
                    })
                         .then((res) => res.json())
                         .then((res) => {
                              if (res.users) {
                                   dispatch(USER_LOGIN(res.users));
                                   dispatch(
                                        NOTIFY_ADD({
                                             id: Math.floor(
                                                  Math.random(1, 10) * 1000000
                                             ),
                                             type: "success",
                                             message: "Bạn đã đặt hàng thành công",
                                        })
                                   );
                                   dispatch(CLEAR_PRODUCT());
                              }
                         });
               } else {
                    dispatch(
                         NOTIFY_ADD({
                              id: Math.floor(Math.random(1, 10) * 100),
                              type: "error",
                              message: "Bạn cần xác nhận thông tin",
                         })
                    );
               }
          }
          setTimeout(() => {
               setLoading(false);
          }, 1000);
     };

     const handleShowMoreProducts = (target) => {
          const container_products =
               document.querySelector(".container-product");
          const product = document.querySelector(".product");
          // if (type === "+") {
          if (target.innerHTML === "+") {
               target.innerHTML = "-";
               let height = (product.clientHeight + 2) * products.length;
               container_products.style.height = `${height}px`;
               return;
          }
          target.innerHTML = "+";
          container_products.style.height = "0";
          // }
     };

     return (
          <>
               {products && products.length > 0 ? (
                    <div className="content-payment-page">
                         {loading ? <Loading /> : null}
                         <div className="address">
                              <p className="title">Địa chỉ</p>
                              <label>
                                   Tên người nhận
                                   <span className="text-red-500"> *</span>
                              </label>
                              <input
                                   type="text"
                                   value={fullName}
                                   onChange={(e) => setFullName(e.target.value)}
                              />
                              <label>
                                   Số điện thoại
                                   <span className="text-red-500"> *</span>
                              </label>
                              <input
                                   type="text"
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                              />
                              <label>
                                   Địa chỉ
                                   <span className="text-red-500"> *</span>
                              </label>
                              <input
                                   type="text"
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}
                              />
                              <label>
                                   Quận / huyện
                                   <span className="text-red-500"> *</span>
                              </label>
                              <input
                                   type="text"
                                   value={district}
                                   onChange={(e) => setDistrict(e.target.value)}
                              />
                              <label>
                                   Tỉnh / thành
                                   <span className="text-red-500"> *</span>
                              </label>
                              <input
                                   type="text"
                                   value={city}
                                   onChange={(e) => setCity(e.target.value)}
                              />
                              <label>Zip</label>
                              <input
                                   type="text"
                                   value={zip}
                                   onChange={(e) => setZip(e.target.value)}
                              />
                              <div className="mt-4">
                                   <div className="flex items-start">
                                        <input
                                             type="checkbox"
                                             className="mr-2 mt-1"
                                             checked={checkbox}
                                             onChange={() =>
                                                  setCheckbox(!checkbox)
                                             }
                                        />
                                        <label>
                                             Tôi cam kết các thông tin trên là
                                             chính xác
                                        </label>
                                   </div>
                                   <button onClick={() => handlePayment()}>
                                        Mua hàng
                                   </button>
                              </div>
                         </div>
                         <div className="cart">
                              <p className="title">Đơn hàng của bạn</p>
                              <div className="product_total">
                                   <div className="container-product">
                                        {products.map((item) => (
                                             <div
                                                  key={item.id}
                                                  className="product"
                                             >
                                                  <div className="w-20">
                                                       <img
                                                            src={
                                                                 item.image ||
                                                                 item.images[0]
                                                            }
                                                            alt=""
                                                       />
                                                  </div>
                                                  <div className="flex flex-col w-1/3 justify-around">
                                                       <p className="name">
                                                            {item.name}
                                                       </p>
                                                       <p className="quantity">
                                                            {item.quantity}
                                                       </p>
                                                  </div>
                                                  <div>
                                                       <p>
                                                            {item.price.toLocaleString()}
                                                            <sup>đ</sup>
                                                       </p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                                   <div className="plus-containter-product">
                                        <span
                                             onClick={(e) =>
                                                  handleShowMoreProducts(
                                                       e.target
                                                  )
                                             }
                                        >
                                             +
                                        </span>
                                   </div>
                                   <div className="flex justify-between p-4">
                                        <p>Tổng:</p>
                                        <p>{totalPrice.toLocaleString()}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               ) : (
                    <ComponentWaitLoad />
               )}
          </>
     );
};

export default Paymentpage;
