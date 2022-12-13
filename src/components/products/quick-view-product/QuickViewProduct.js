import React, { useContext, useState } from "react";
import Slider from "react-slick";
import context from "../../../common/context";
import "./quick-view-product.css";

const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 2,
};

const QuickViewProduct = (props) => {
     const consumer = useContext(context);
     const dispatch = consumer[1];
     const [amount, setAmount] = useState(1);

     const item = props.item;

     const handleAddProduct = () => {
          item.quantity = amount;
          dispatch({
               type: "ADD_PRODUCT",
               payload: item,
          });
          props.closeQuickView(true);
     };

     return (
          <div
               className="quick-view-product"
               onClick={(e) => {
                    if (
                         e.target ===
                         document.querySelector(".quick-view-product")
                    )
                         props.closeQuickView(true);
               }}
          >
               <div className="container-describe-product">
                    <div className="col-1">
                         <div className="img-block">
                              <img src={item.images[0]} alt="" />
                         </div>
                         {item.images.length !== 1 && (
                              <div className="more-view-wrapper">
                                   <Slider {...settings}>
                                        {item.images.map((item, index) => (
                                             <div key={index}>
                                                  <img src={item} alt="" />
                                             </div>
                                        ))}
                                   </Slider>
                              </div>
                         )}
                    </div>
                    <div className="col-2">
                         <p className="name">{item.name}</p>
                         <div className="brand-stocking">
                              <p>
                                   Thương hiệu: <span>{item.brand}</span>
                              </p>
                              <p>
                                   Tình trạng: <span>còn</span>
                              </p>
                         </div>
                         <p className="price">
                              {item.price.toLocaleString()}
                              <sup>đ</sup>
                         </p>
                         <p className="describe">
                              {item.describe || "Đang cập nhật"}
                         </p>
                         {item.color.length >= 1 && (
                              <div className="container-colors">
                                   <p>Màu sắc</p>
                                   <div className="colors">
                                        {item.color.map((item, index) => (
                                             <p
                                                  key={index}
                                                  style={{
                                                       backgroundColor: item,
                                                  }}
                                             >
                                                  <span>{item}</span>
                                             </p>
                                        ))}
                                   </div>
                              </div>
                         )}
                         {item.size && item.size.length !== 1 && (
                              <div className="container-size">
                                   <p>kích thước</p>
                                   <div className="size">
                                        {item.size && (
                                             <React.Fragment>
                                                  {item.size.map(
                                                       (item, index) => (
                                                            <span key={index}>
                                                                 {item}
                                                            </span>
                                                       )
                                                  )}
                                             </React.Fragment>
                                        )}
                                   </div>
                              </div>
                         )}
                         <div className="container-amount">
                              <span>Số lượng</span>
                              <div className="amount">
                                   <button
                                        onClick={() =>
                                             amount > 1 &&
                                             setAmount((prev) => prev - 1)
                                        }
                                   >
                                        -
                                   </button>
                                   <p>{amount}</p>
                                   <button
                                        onClick={() =>
                                             setAmount((prev) => prev + 1)
                                        }
                                   >
                                        +
                                   </button>
                              </div>
                         </div>
                         <div className="add-product">
                              <button onClick={() => handleAddProduct()}>
                                   Thêm vào giỏ hàng
                              </button>
                         </div>
                         <p className="call-to-buy">
                              Gọi đặt mua: <span>19001010</span>{" "}
                              {"(Miễn phí, 8-21h cả T7,CN)"}
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default QuickViewProduct;
