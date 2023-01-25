import React, { useEffect, useState } from "react";
import ProductSale from "../pattern/ProductSale";
import PatternFeatureHot from "../pattern/PatternFeatureHot";
import ComponentWaitLoad from "../../../../components/loading/ComponentWaitLoad";

const HotProducts = (props) => {
     const [hot_products, setHot_products] = useState(null);
     useEffect(() => {
          const list = props.list_products;
          if (Array.isArray(list)) {
               for (let i = 0; i < list.length; i++) {
                    for (let j = i + 1; j < list.length; j++) {
                         if (list[i].sold < list[j].sold) {
                              let swap = list[i];
                              list[i] = list[j];
                              list[j] = swap;
                         }
                    }
               }
               const export_list = list.filter((item, index) => index < 11);
               setHot_products(export_list);
          }
     }, [props.list_products]);

     return (
          <div className="pattern">
               {hot_products ? (
                    <React.Fragment>
                         <PatternFeatureHot
                              list_products={hot_products.filter(
                                   (item, index) => index > 0
                              )}
                         />
                         <div className="mg-l-10">
                              <ProductSale
                                   product={hot_products[0]}
                                   time={179800}
                              />
                         </div>
                    </React.Fragment>
               ) : (
                    <ComponentWaitLoad />
               )}
          </div>
     );
};

export default HotProducts;
