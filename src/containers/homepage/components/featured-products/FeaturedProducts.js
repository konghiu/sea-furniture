import React, { useEffect, useState } from "react";
import ProductSale from "../pattern/ProductSale";
import PatternFeatureHot from "../pattern/PatternFeatureHot";
import ComponentWaitLoad from "../../../../components/loading/ComponentWaitLoad";

const FeaturedProducts = (props) => {
     const [featured_products, setFeatured_products] = useState(null);
     useEffect(() => {
          const list = props.list_products;
          if (Array.isArray(list)) {
               for (let i = 0; i < list.length; i++) {
                    for (let j = i + 1; j < list.length; j++) {
                         if (list[i].view < list[j].view) {
                              let swap = list[i];
                              list[i] = list[j];
                              list[j] = swap;
                         }
                    }
               }
               const export_list = list.filter((item, index) => index < 11);
               setFeatured_products(export_list);
          }
     }, [props.list_products]);

     return (
          <div className="pattern">
               {featured_products ? (
                    <React.Fragment>
                         <div className="mg-r-10">
                              <ProductSale
                                   product={featured_products[0]}
                                   time={36000}
                              />
                         </div>
                         <PatternFeatureHot
                              list_products={featured_products.filter(
                                   (item, index) => index > 0
                              )}
                         />
                    </React.Fragment>
               ) : (
                    <ComponentWaitLoad />
               )}
          </div>
     );
};

export default FeaturedProducts;
