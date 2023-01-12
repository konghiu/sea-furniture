import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pattern.css";

const ProductSale = (props) => {
     // product sale
     const product = props.product;
     const time = props.time;

     // director
     const navigate = useNavigate();

     // timer
     const [day, setDay] = useState(Math.floor(time / 86400));
     const [hours, setHours] = useState(Math.floor((time % 86400) / 3600));
     const [minute, setMinute] = useState(
          Math.floor(((time % 86400) % 3600) / 60)
     );
     const [seconds, setSeconds] = useState(((time % 86400) % 3600) % 60);

     useEffect(() => {
          setTimeout(() => {
               setSeconds((prev) => {
                    let next = prev - 1;
                    if (next < 0) {
                         next = 59;
                    }
                    return next;
               });
          }, 1000);
          if (seconds === 0 && minute > 0 && hours > 0 && day !== 0) {
               setMinute((prev) => {
                    let next = prev - 1;
                    if (next < 0) next = 59;
                    return next;
               });
          }
          if (minute === 0 && hours > 0 && day !== 0) {
               setHours((prev) => {
                    let next = prev - 1;
                    if (next < 0) next = 23;
                    return next;
               });
          }
          if (hours === 0 && day > 0) {
               setDay((prev) => {
                    let next = prev - 1;
                    if (next < 0) next = 0;
                    return next;
               });
          }
     }, [seconds]);

     const handleShowDetail = () => {
          navigate("/sea-furniture/products/product" + product.url);
     };

     return (
          <div className="product-sale">
               {product ? (
                    <React.Fragment>
                         <div className="container-img">
                              <img src={product.images[0]} alt="" />
                         </div>
                         <div className="container-timer">
                              <p>
                                   <span>{day}</span>
                                   <span>Ngày</span>
                              </p>
                              <p>
                                   <span>{hours}</span>
                                   <span>Giờ</span>
                              </p>
                              <p>
                                   <span>{minute}</span>
                                   <span>Phút</span>
                              </p>
                              <p>
                                   <span>{seconds}</span>
                                   <span>Giây</span>
                              </p>
                         </div>
                         <div className="container-info-product">
                              <p
                                   className="name"
                                   onClick={() => handleShowDetail()}
                              >
                                   {product.name}
                              </p>
                              <p>{product.brand}</p>
                              <p>
                                   {product.price.toLocaleString()}
                                   <sup>đ</sup>
                              </p>
                         </div>
                    </React.Fragment>
               ) : null}
          </div>
     );
};

export default React.memo(ProductSale);
