import React from "react";
import { useOutletContext } from "react-router-dom";
import "./user-cart-transaction.css";

const UserCartTransaction = () => {
     const contexts = useOutletContext();

     const account = contexts.account;

     return (
          <div className="cart-transaction">
               <table>
                    <thead>
                         <tr>
                              <th>Mã đơn hàng</th>
                              <th>Ngày</th>
                              <th>Địa chỉ</th>
                              <th>Giá trị đơn hàng</th>
                              <th>TT thanh toán</th>
                              <th>TT vận chuyển</th>
                         </tr>
                    </thead>
                    <tbody>
                         {account.transaction.length > 0 ? (
                              <>
                                   {account.transaction.map((item, index) => (
                                        <tr className="w-full" key={index}>
                                             <td>#{item.code}</td>
                                             <td>{item.date}</td>
                                             <td>{item.address}</td>
                                             <td>
                                                  {item.totalPrice.toLocaleString()}
                                                  <sup>đ</sup>
                                             </td>
                                             <td>Chưa thu tiền</td>
                                             <td>0</td>
                                        </tr>
                                   ))}
                              </>
                         ) : null}
                    </tbody>
               </table>
               {account.transaction.length === 0 && (
                    <p>Bạn chưa có bất kỳ giao dịch nào.</p>
               )}
          </div>
     );
};

export default UserCartTransaction;
