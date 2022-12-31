import React, { startTransition, useContext } from "react";
import context from "../../../common/context";
import {
     NOTIFY_ADD,
     UPDATE_DECREASE,
     UPDATE_INCREASE,
} from "../../../common/context/reducer/actions";
import "./product-in-cart.css";

const ProductInCart = (props) => {
     const consumer = useContext(context);
     const dispatch = consumer[1];
     const notify_for_user = consumer[0].notify_for_user;
     const item = props.item;

     const handleRemoveProductCart = (image) => {
          dispatch({
               type: "REMOVE_PRODUCT",
               payload: image,
          });
          startTransition(() => {
               dispatch(
                    NOTIFY_ADD({
                         id: notify_for_user.length * 10,
                         type: "success",
                         message: "Xóa sản phẩm thành công.",
                    })
               );
          });
     };

     const handleUpdateIncrease = (id) => {
          dispatch(UPDATE_INCREASE(id));
     };

     const handleUpdateDecrease = (id) => {
          dispatch(UPDATE_DECREASE(id));
     };

     return (
          <div className="product-in-cart">
               <div>
                    <i
                         className="fa-solid fa-xmark cursor-pointer"
                         onClick={() => handleRemoveProductCart(item.image)}
                    ></i>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
               </div>
               <div className="">
                    <p>
                         {item.price.toLocaleString()}
                         <sup>đ</sup>
                    </p>
               </div>
               <div className="container-quantity">
                    <div className="quantity">
                         <p>{item.quantity}</p>
                         <div className="">
                              <i
                                   className="fa-solid fa-caret-up"
                                   onClick={() =>
                                        handleUpdateIncrease(item.image)
                                   }
                              ></i>
                              <i
                                   className="fa-solid fa-caret-down"
                                   onClick={() =>
                                        handleUpdateDecrease(item.image)
                                   }
                              ></i>
                         </div>
                    </div>
               </div>
               <div>
                    <p>
                         {(item.price * item.quantity).toLocaleString()}
                         <sup>đ</sup>
                    </p>
               </div>
          </div>
     );
};

export default ProductInCart;
