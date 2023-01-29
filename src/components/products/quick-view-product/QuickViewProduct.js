import React, { useContext } from "react";
import context from "../../../common/context";
import PatternViewProduct from "../pattern/PatternViewProduct";
import "./quick-view-product.css";

const QuickViewProduct = () => {
     const consumer = useContext(context);
     const quick_view = consumer[0].quick_view_product;

     return (
          <React.Fragment>
               {quick_view ? (
                    <div className="quick-view-product">
                         <PatternViewProduct item={quick_view} />
                    </div>
               ) : null}
          </React.Fragment>
     );
};

export default QuickViewProduct;
