import React from "react";
import { useState } from "react";
import Product from "../../../../components/products/Product";
import { handleSortByOption } from "../../feature/handleSortByOption";
import "./container-list-products.css";

const ContainerListProducts = (props) => {
     const [option, setOption] = useState(null);

     const listShow = React.useMemo(() => {
          const optionList = handleSortByOption(props.list_products, option);
          return optionList;
     }, [option, props.list_products]);

     return (
          <div className="container-list-products">
               <div className="row-1">
                    <p className="title">{props.title}</p>
                    <div className="option">
                         <label>Sắp xếp theo: </label>
                         <select onChange={(e) => setOption(e.target.value)}>
                              <option value={"null"}>Mặc định</option>
                              <option value={"A-Z"}>A -{">"} Z</option>
                              <option value={"Z-A"}>Z -{">"} A</option>
                              <option value={"Increase"}>Giá tăng dần</option>
                              <option value={"Decrease"}>Giá giảm dần</option>
                         </select>
                    </div>
               </div>
               {Array.isArray(listShow) && listShow.length > 0 ? (
                    <div className="row-2 grid grid-cols-4 gap-7">
                         {listShow.map((item) => (
                              <React.Fragment key={item.id}>
                                   <Product item={item} name={item.name} />
                              </React.Fragment>
                         ))}
                    </div>
               ) : (
                    <p className="not-products">
                         Không có bất kỳ sản phẩm nào bạn cần tìm.
                    </p>
               )}
          </div>
     );
};

export default React.memo(ContainerListProducts);
