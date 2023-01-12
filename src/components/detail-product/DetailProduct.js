import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import context from "../../common/context";
import ComponentWaitLoad from "../loading/ComponentWaitLoad";
import NotFound from "../not-found/component/NotFound";
import ViewProduct from "../products/view-product/ViewProduct";
import "./detail-product.css";

const DetailProduct = () => {
     const consumer = useContext(context);
     const list_products = consumer[0].products_list;

     const [product, setProduct] = useState();

     // payload of URL
     const ID_product = useParams();

     // show describe
     const [isShowDescribe, setIsShowDescribe] = useState(true);

     useEffect(() => {
          if (list_products && list_products.length > 0) {
               const export_item = list_products.filter(
                    (item) => item.alias === ID_product.product
               );
               if (export_item.length === 0) {
                    setProduct(null);
                    return;
               }
               setProduct(export_item[0]);
          }
     }, [ID_product, list_products]);

     return (
          <div className="detail-product">
               {product ? (
                    <div className="container">
                         <ViewProduct view_product={product} />
                         <div className="describe-info">
                              <div className="container-title">
                                   <button
                                        className={
                                             isShowDescribe ? "clicked" : null
                                        }
                                        onClick={() => setIsShowDescribe(true)}
                                   >
                                        Mô tả
                                   </button>
                                   <button
                                        className={
                                             !isShowDescribe ? "clicked" : null
                                        }
                                        onClick={() => setIsShowDescribe(false)}
                                   >
                                        Thông tin
                                   </button>
                              </div>
                              <div className="content">
                                   {isShowDescribe ? (
                                        <div
                                             dangerouslySetInnerHTML={{
                                                  __html: product.content,
                                             }}
                                        ></div>
                                   ) : (
                                        <div>
                                             <p>
                                                  Thông tin đang được cập nhật.
                                             </p>
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               ) : (
                    <React.Fragment>
                         {product === null ? (
                              <NotFound />
                         ) : (
                              <ComponentWaitLoad />
                         )}
                    </React.Fragment>
               )}
          </div>
     );
};

export default DetailProduct;
