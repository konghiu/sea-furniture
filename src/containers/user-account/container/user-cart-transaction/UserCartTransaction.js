import React from "react";
import "./user-cart-transaction.css";

const UserCartTransaction = () => {
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
                         {/* <tr>
                              <td>#4604</td>
                              <td>18/12/2022</td>
                              <td>Gò vấp, HCM</td>
                              <td>
                                   610,000<sup>đ</sup>
                              </td>
                              <td>Chưa thu tiền</td>
                              <td>Chưa thu tiền</td>
                         </tr> */}
                    </tbody>
               </table>
               <p>Bạn chưa có bất kỳ giao dịch nào.</p>
          </div>
     );
};

export default UserCartTransaction;
