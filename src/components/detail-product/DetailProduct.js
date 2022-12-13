import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../config/useFetch";
import feature_return_top from "../../features/feature_return_top";
import BackToTop from "../back-to-top/BackToTop";
import Breadcrum from "../breadcrumb_background/Breadcrum";
import Footer from "../footer/Footer";
import ContainerHeader from "../header/ContainerHeader";
import ComponentWaitLoad from "../loading/ComponentWaitLoad";
import Loading from "../loading/Loading";
import QuickViewProduct from "../products/quick-view-product/QuickViewProduct";
import "./detail-product.css";

const DetailProduct = () => {
     const [data, setData] = useState("answer return");
     const api = useFetch("/api/products");
     const ID_product = useParams();
     useEffect(() => {
          if (api !== "answer return") {
               const export_item = api.products.filter(
                    (item) => item.alias === ID_product.product
               );
               setData(export_item[0]);
          }
     }, [api, ID_product]);

     useEffect(() => {
          feature_return_top();
     }, []);

     return (
          <div className="detail-product">
               <ContainerHeader />
               <Breadcrum />
               {data !== "answer return" && data ? (
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
