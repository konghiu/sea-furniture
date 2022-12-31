import React, { useEffect, useState } from "react";
import Product from "../../../../components/products/Product";
import "./container-list-products.css";

const ContainerListProducts = (props) => {
     const [option, setOption] = useState(null);
     // const [listProducts, setListProducts] = useState([]);

     useEffect(() => {
          props.handleSetOption(option);
     }, [option]);

     // useEffect(() => {
     //      console.log(option);
     //      let listRender = props.list_products;
     //      if (option === "A-Z") {
     //           console.log(true);
     //           for (let i = 0; i < listRender.length; i++) {
     //                for (let j = i + 1; j < listRender.length; j++) {
     //                     if (
     //                          listRender[i].name[0].charCodeAt() >
     //                          listRender[j].name[0].charCodeAt()
     //                     ) {
     //                          let swap = listRender[i];
     //                          listRender[i] = listRender[j];
     //                          listRender[j] = swap;
     //                     }
     //                }
     //           }
     //      } else if (option === "Z-A")
     //           for (let i = 0; i < listRender.length; i++) {
     //                for (let j = i + 1; j < listRender.length; j++) {
     //                     if (
     //                          listRender[i].name[0].charCodeAt() <
     //                          listRender[j].name[0].charCodeAt()
     //                     ) {
     //                          let swap = listRender[i];
     //                          listRender[i] = listRender[j];
     //                          listRender[j] = swap;
     //                     }
     //                }
     //           }
     //      else if (option === "Increase")
     //           for (let i = 0; i < listRender.length; i++) {
     //                for (let j = i + 1; j < listRender.length; j++) {
     //                     if (listRender[i].price > listRender[j].price) {
     //                          let swap = listRender[i];
     //                          listRender[i] = listRender[j];
     //                          listRender[j] = swap;
     //                     }
     //                }
     //           }
     //      else if (option === "Decrease")
     //           for (let i = 0; i < listRender.length; i++) {
     //                for (let j = i + 1; j < listRender.length; j++) {
     //                     if (listRender[i].price < listRender[j].price) {
     //                          let swap = listRender[i];
     //                          listRender[i] = listRender[j];
     //                          listRender[j] = swap;
     //                     }
     //                }
     //           }
     //      else listRender = props.list_products;

     //      setListProducts(listRender);
     // }, [option, props]);
     // useEffect(() => {
     //      console.log("in effect", props.list_products);
     // }, [props]);
     // console.log("out effect", props.list_products);

     return (
          <div className="container-list-products">
               <div className="row-1">
                    <p className="title">{props.title}</p>
                    <div className="option">
                         <label>Sắp xếp theo: </label>
                         <select onChange={(e) => setOption(e.target.value)}>
                              <option value={"default"}>Mặc định</option>
                              <option value={"A-Z"}>A -{">"} Z</option>
                              <option value={"Z-A"}>Z -{">"} A</option>
                              <option value={"Increase"}>Giá tăng dần</option>
                              <option value={"Decrease"}>Giá giảm dần</option>
                         </select>
                    </div>
               </div>
               {
                    // Array.isArray(props.list_products) &&
                    props.list_products.length > 0 ? (
                         <div className="row-2 grid grid-cols-4 gap-7">
                              {props.list_products.map((item) => (
                                   <React.Fragment key={item.id}>
                                        <Product item={item} name={item.name} />
                                   </React.Fragment>
                              ))}
                         </div>
                    ) : (
                         <p className="not-products">
                              Không có bất kỳ sản phẩm nào bạn cần tìm.
                         </p>
                    )
               }
          </div>
     );
};

export default React.memo(ContainerListProducts);
