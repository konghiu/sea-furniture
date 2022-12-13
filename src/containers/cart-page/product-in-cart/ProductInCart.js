import React, { useContext } from "react";
import context from "../../../common/context";
import {
     UPDATE_DECREASE,
     UPDATE_INCREASE,
} from "../../../common/context/reducer/actions";
import "./product-in-cart.css";

const ProductInCart = (props) => {
     const consumer = useContext(context);
     const dispatch = consumer[1];
     const item = props.item;

     const handleRemoveProductCart = () => {
          dispatch({
               type: "REMOVE_PRODUCT",
               payload: props.index,
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
                         onClick={() => handleRemoveProductCart()}
                    ></i>
                    <img src={item.images[0]} alt="" />
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
                                   onClick={() => handleUpdateIncrease(item.id)}
                              ></i>
                              <i
                                   className="fa-solid fa-caret-down"
                                   onClick={() => handleUpdateDecrease(item.id)}
                              ></i>
                         </div>
                    </div>
               </div>
               <div>
                    <p>
                         {item.price.toLocaleString()}
                         <sup>đ</sup>
                    </p>
               </div>
          </div>
     );
};

export default ProductInCart;
