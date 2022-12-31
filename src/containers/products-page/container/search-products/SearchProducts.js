import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import slugify from "react-slugify";
import context from "../../../../common/context";
import BackToTop from "../../../../components/back-to-top/BackToTop";
import Breadcrum from "../../../../components/breadcrumb_background/Breadcrum";
import Footer from "../../../../components/footer/Footer";
import ContainerHeader from "../../../../components/header/ContainerHeader";
import ComponentWaitLoad from "../../../../components/loading/ComponentWaitLoad";
import Product from "../../../../components/products/Product";
import "./search-products.css";

const SearchProducts = () => {
     const search = useParams();
     const consumer = useContext(context);
     const api_products = consumer[0].products_list;
     const [list_product, setList_products] = useState(null);

     useEffect(() => {
          if (api_products && search.search) {
               const searchText = slugify(search.search, {
                    lower: true,
                    strict: true,
                    locale: "vi",
               });
               setList_products(() => {
                    const next = api_products.filter((item) => {
                         return item.alias.includes(searchText);
                    });
                    return next;
               });
          }
     }, [api_products, search.search]);

     return (
          <div className="search-products">
               <ContainerHeader />
               <Breadcrum />
               <div className="content">
                    {list_product ? (
                         <div className="">
                              <p className="title">Trang tìm kiếm</p>
                              {list_product.length > 0 ? (
                                   <React.Fragment>
                                        <div className="container-products">
                                             <p className="quantity-products">
                                                  Có {list_product.length} kết
                                                  quả tìm kiếm phù hợp
                                             </p>
                                        </div>
                                        <div className="grid grid-cols-5 gap-y-10">
                                             {list_product.map((item) => (
                                                  <React.Fragment key={item.id}>
                                                       <Product
                                                            item={item}
                                                            name={item.name}
                                                       />
                                                  </React.Fragment>
                                             ))}
                                        </div>
                                   </React.Fragment>
                              ) : (
                                   <div className="no-product">
                                        <p>
                                             Không có từ khóa "
                                             <span className="font-semibold">
                                                  {search.search}
                                             </span>
                                             " phù hợp.
                                        </p>
                                   </div>
                              )}
                         </div>
                    ) : (
                         <ComponentWaitLoad />
                    )}
               </div>
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     );
};

export default SearchProducts;
