import React, { useContext, useMemo } from "react";
import ContainerHeader from "../../components/header/ContainerHeader";
import BreadCrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import "./cart-page.css";
import ProductInCart from "./product-in-cart/ProductInCart";
import context from "../../common/context";

const Cartpage = () => {
     const consumer = useContext(context);
     const user_cart = consumer[0].user_cart;

     const total_price = useMemo(() => {
          let total = 0;
          user_cart.forEach((item) => {
               total += item.price;
          });
          return total;
     }, [user_cart]);

     return (
          <div className="cart-page">
               <ContainerHeader />
               <BreadCrum />
               <div className="container-content">
                    <p className="title">Giỏ hàng của bạn</p>
                    {user_cart.length > 0 ? (
                         <div className="content has-products">
                              <div className="header">
                                   <p>Sản phẩm</p>
                                   <p>Giá</p>
                                   <p>Số lượng</p>
                                   <p>Thành tiền</p>
                              </div>
                              <div className="container-products">
                                   {user_cart.map((item, index) => (
                                        <ProductInCart
                                             key={index}
                                             index={index}
                                             item={item}
                                        />
                                   ))}
                              </div>
                              <div className="container-totals">
                                   <div className="totals">
                                        <div className="total-price">
                                             <p>Tổng tiền thanh toán:</p>
                                             <p>
                                                  {total_price.toLocaleString()}
                                                  <sup>đ</sup>
                                             </p>
                                        </div>
                                        <div className="checkout">
                                             <button>Tiếp tục mua hàng</button>
                                             <button>
                                                  Tiến hành thanh toán
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ) : (
                         <div className="content not-products">
                              <p>
                                   Không có sản phẩm nào trong giỏ hàng. Quay
                                   lại cửa hàng để tiếp tục mua sắm.
                              </p>
                         </div>
                    )}
               </div>
               <Footer />
          </div>
     );
};

export default Cartpage;
