import React, { useContext, useState, startTransition } from "react";
import Slider from "react-slick";
import context from "../../../common/context";
import {
     ADD_PRODUCT,
     NOTIFY_ADD,
} from "../../../common/context/reducer/actions";
import Loading from "../../loading/Loading";
import "./quick-view-product.css";

const settings = {
     dots: false,
     infinite: false,
     speed: 500,
     // slidesToShow: 2,
     slidesToScroll: 1,
};

const QuickViewProduct = (props) => {
     const item = props.item;

     const consumer = useContext(context);
     const notify_for_user = consumer[0].notify_for_user;
     const dispatch = consumer[1];
     const [quantity, setQuantity] = useState(1);
     const [image, setImage] = useState(item.images[0]);

     const [loading, setLoading] = useState(false);

     const handleAddProduct = () => {
          setLoading(true);
          startTransition(() => {
               setTimeout(() => {
                    setLoading(false);
               }, 500);
          });
          // item to add
          const add_item = { ...item };
          add_item.quantity = quantity;
          add_item.image = image;
          dispatch(ADD_PRODUCT(add_item));
          // check is close quick view
          if (props.closeQuickView) {
               props.closeQuickView(true);
          }
          //
          dispatch(
               NOTIFY_ADD({
                    id: notify_for_user.length * 10,
                    message: "Thêm sản phẩm thành công.",
                    type: "success",
               })
          );
     };

     return (
          <React.Fragment>
               {loading ? <Loading /> : null}
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
                                   <img src={image} alt="" />
                              </div>
                              {item.images.length !== 1 ? (
                                   <div className="more-view-wrapper">
                                        <Slider
                                             {...settings}
                                             slidesToShow={item.images.length}
                                        >
                                             {item.images.map((img, index) => (
                                                  <div
                                                       key={index}
                                                       onClick={() =>
                                                            setImage(
                                                                 item.images[
                                                                      index
                                                                 ]
                                                            )
                                                       }
                                                  >
                                                       <img src={img} alt="" />
                                                  </div>
                                             ))}
                                        </Slider>
                                   </div>
                              ) : null}
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
                                                            backgroundColor:
                                                                 item,
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
                                                                 <span
                                                                      key={
                                                                           index
                                                                      }
                                                                 >
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
                                                  quantity > 1 &&
                                                  setQuantity(
                                                       (prev) => prev - 1
                                                  )
                                             }
                                        >
                                             -
                                        </button>
                                        <p>{quantity}</p>
                                        <button
                                             onClick={() =>
                                                  setQuantity(
                                                       (prev) => prev + 1
                                                  )
                                             }
                                        >
                                             +
                                        </button>
                                   </div>
                              </div>
                              <div
                                   className="add-product"
                                   onClick={() => handleAddProduct()}
                              >
                                   <button>Thêm vào giỏ hàng</button>
                              </div>
                              <p className="call-to-buy">
                                   Gọi đặt mua: <span>19001010</span>{" "}
                                   {"(Miễn phí, 8-21h cả T7,CN)"}
                              </p>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     );
};

export default QuickViewProduct;
