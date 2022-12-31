import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import context from "../../common/context";
import feature_return_top from "../../features/feature_return_top";
import BackToTop from "../back-to-top/BackToTop";
import Breadcrum from "../breadcrumb_background/Breadcrum";
import Footer from "../footer/Footer";
import ContainerHeader from "../header/ContainerHeader";
import ComponentWaitLoad from "../loading/ComponentWaitLoad";
import QuickViewProduct from "../products/quick-view-product/QuickViewProduct";
import "./detail-product.css";

const DetailProduct = () => {
     const consumer = useContext(context);
     const list_products = consumer[0].products_list;

     const [data, setData] = useState(null);
     const ID_product = useParams();

     useEffect(() => {
          if (list_products) {
               const export_item = list_products.filter(
                    (item) => item.alias === ID_product.product
               );
               setData(export_item[0]);
          }
     }, [ID_product, list_products]);

     useEffect(() => {
          feature_return_top();
     }, []);

     return (
          <div className="detail-product">
               <ContainerHeader />
               <Breadcrum />
               {data && data ? (
                    <div className="container">
                         <QuickViewProduct item={data} />
                         <div className="describe-info">
                              <div className="container-title">
                                   <p>Mô tả</p>
                                   <p>thông tin</p>
                              </div>
                              <div className="content">
                                   <div
                                        dangerouslySetInnerHTML={{
                                             __html: data.content,
                                        }}
                                   ></div>
                              </div>
                         </div>
                    </div>
               ) : (
                    <ComponentWaitLoad />
               )}

               <Footer />
               <BackToTop />
          </div>
     );
};

export default DetailProduct;
