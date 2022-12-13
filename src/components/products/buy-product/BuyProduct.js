import React, { useMemo, useState } from "react";
import "./buy-product.css";

const BuyProduct = (props) => {
     const item = props.item;

     const [quantity, setQuantity] = useState(1);

     const total_price = useMemo(() => {
          let total = item.price * quantity;
          return total;
     }, [quantity, item]);

     return (
          <div
               className="buy-product"
               onClick={(e) => {
                    if (e.target === document.querySelector(".buy-product"))
                         props.closeBuyProduct(true);
               }}
          >
               <div className="content">
                    <p className="title">
                         <i className="fa-solid fa-check"></i>
                         <span>Sản phẩm vừa được thêm giỏ hàng</span>
                    </p>
                    <div className="container-product">
                         {item && (
                              <div className="product-to-buy">
                                   <div className="col-1">
                                        <div>
                                             <img src={item.images[0]} alt="" />
                                        </div>
                                        <div>
                                             <p>{item.name}</p>
                                        </div>
                                   </div>
                                   <div className="col-2">
                                        <div className="col-2_1">
                                             <p>
                                                  {item.price.toLocaleString()}
                                                  <sup>đ</sup>
                                             </p>
                                        </div>
                                        <div className="col-2_2">
                                             <button
                                                  onClick={() =>
                                                       setQuantity((prev) =>
                                                            prev > 1
                                                                 ? prev - 1
                                                                 : prev
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
                                        <div className="col-2_3">
                                             <p>
                                                  {total_price.toLocaleString()}
                                                  <sup>đ</sup>
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         )}
                    </div>
                    <div className="total-price">
                         <div className="col-1">
                              <p>GIỎ HÀNG CỦA BẠN</p>
                              <p>{"(1 sản phẩm)"}</p>
                         </div>
                         <div className="col-2">
                              <p>Tổng tiền thanh toán:</p>
                              <p>
                                   {total_price.toLocaleString()}
                                   <sup>đ</sup>
                              </p>
                         </div>
                    </div>
                    <div className="container-buttons">
                         <button>Tới giỏ hàng</button>
                         <button>Tiến hành thanh toán</button>
                    </div>
               </div>
          </div>
     );
};

export default BuyProduct;
