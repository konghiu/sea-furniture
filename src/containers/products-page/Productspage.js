import React, { useContext, useEffect, useState } from "react";
import SectionCategory from "../../components/section-category/SectionCategory";
import "./products-page.css";
import BrandsPart from "./container/brands-part/BrandsPart";
import PriceRangePart from "./container/price-range-part/PriceRangePart";
import ColorsPart from "./container/colors-part/ColorsPart";
import ContainerListProducts from "./container/container-products/ContainerListProducts";
import ComponentWaitLoad from "../../components/loading/ComponentWaitLoad";
import feature_return_top from "../../features/feature_return_top";
import { useParams } from "react-router-dom";
import context from "../../common/context";

const available_search = [
     {
          url: "ban",
          params: "Bàn",
     },
     {
          url: "ghe",
          params: "Ghế",
     },
     {
          url: "trang-tri",
          params: "Trang trí",
     },
     {
          url: "ke",
          params: "Kệ",
     },
     {
          url: "tu",
          params: "Tủ",
     },
     {
          url: "sofa",
          params: "Sofa",
     },
];

const Productspage = () => {
     const consumer = useContext(context);
     const api_products = consumer[0].products_list;

     const params = useParams();
     const [title, setTitle] = useState("Tất cả sản phẩm");
     const [totalProduct, setTotalProduct] = useState(null);

     const [list_products, setList_products] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

     // category
     const [checkBrand, setCheckBrand] = useState(null);
     const [checkPrice, setCheckPrice] = useState(null);
     const [checkColor, setCheckColor] = useState(null);
     const [option, setOption] = useState(null);

     const [numberPage, setNumberPage] = useState(1);

     useEffect(() => {
          if (
               api_products &&
               api_products.length > 0 &&
               (!params.type_product || params.type_product === "all")
          ) {
               setTotalProduct(api_products);
          } else if (api_products && params.type_product) {
               const find = Object.values(available_search).findIndex(
                    (item) => item.url === params.type_product
               );
               if (find !== -1) {
                    setTitle(available_search[find].params);
                    setTotalProduct(() => {
                         const next = api_products.filter((item) => {
                              return (
                                   item.product_type.toUpperCase() ===
                                   available_search[find].params.toUpperCase()
                              );
                         });
                         return next;
                    });
               }
          }
     }, [api_products, params]);

     useEffect(() => {
          feature_return_top();
          setIsLoading(true);
          if (!checkBrand && !checkPrice && !checkColor) {
               if (totalProduct) {
                    let showList = totalProduct;
                    if (showList.length > 12) {
                         showList = showList.filter((item, index) => {
                              return (
                                   index >= (numberPage - 1) * 12 &&
                                   index < numberPage * 12
                              );
                         });
                    }
                    setList_products(showList);
                    setIsLoading(false);
               }
               return;
          }
          let newList = totalProduct;

          if (checkBrand !== null) {
               newList = totalProduct.filter(
                    (item) =>
                         checkBrand !== null &&
                         item.brand.toUpperCase() === checkBrand.toUpperCase()
               );
          }

          if (checkPrice !== null) {
               newList = newList.filter((item) => {
                    return (
                         checkPrice !== null &&
                         item.price >= checkPrice.min &&
                         item.price < checkPrice.max
                    );
               });
          }

          if (!checkBrand && !checkPrice) newList = totalProduct;

          if (checkColor !== null) {
               newList = newList.filter((item) => {
                    return item.color.includes(checkColor) === true;
               });
          }

          let showList = newList;
          if (newList.length > 12) {
               showList = newList.filter((item, index) => {
                    return (
                         index >= (numberPage - 1) * 12 &&
                         index < numberPage * 12
                    );
               });
          }
          setList_products(showList);
          setIsLoading(false);
     }, [checkBrand, checkPrice, checkColor, totalProduct, numberPage]);

     const handleOpenCategory = (notify) => {
          const banner = document.querySelector(".open-category-mb-tb span");
          const category = document.querySelector(".content .col-1");
          if (notify) {
               category.style = "right: 0;";
               banner.style.display = "block";
               return;
          }
          banner.style.display = "none";
          category.style = "right: -100%;";
     };

     return (
          <div className="container-products-page">
               <SectionCategory />
               {/* open category on mobile tablet */}
               <div className="open-category-mb-tb">
                    <span onClick={() => handleOpenCategory(false)}></span>
                    <i
                         className="fa-solid fa-filter"
                         onClick={() => handleOpenCategory(true)}
                    ></i>
               </div>
               <div className="content">
                    <div className="col-1">
                         {/* <CategoryPart /> */}
                         <BrandsPart
                              handleSetCheckBrand={(brand) =>
                                   setCheckBrand(brand)
                              }
                         />
                         <PriceRangePart
                              handleSetCheckPrice={(price) =>
                                   setCheckPrice(price)
                              }
                         />
                         <ColorsPart
                              handleSetCheckColor={(color) =>
                                   setCheckColor(color)
                              }
                         />
                    </div>
                    <div className="col-2">
                         {!isLoading && Array.isArray(list_products) ? (
                              <ContainerListProducts
                                   title={title}
                                   list_products={list_products}
                                   handleSetOption={(option) =>
                                        setOption(option)
                                   }
                              />
                         ) : (
                              <ComponentWaitLoad />
                         )}
                         {list_products && list_products.length >= 12 ? (
                              <div className="change-page flex items-center float-right mt-10">
                                   <i className="fa-solid fa-chevron-left"></i>
                                   <div className="flex mx-3">
                                        {[1, 2].map((item) => (
                                             <button
                                                  key={item}
                                                  onClick={() => {
                                                       setNumberPage(item);
                                                       feature_return_top();
                                                  }}
                                             >
                                                  {item}
                                             </button>
                                        ))}
                                   </div>
                                   <i className="fa-solid fa-chevron-right"></i>
                              </div>
                         ) : null}
                    </div>
               </div>
          </div>
     );
};

export default Productspage;
