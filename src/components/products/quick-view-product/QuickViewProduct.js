import React, { useContext } from "react";
import context from "../../../common/context";
import PatternViewProduct from "../pattern/PatternViewProduct";

const QuickViewProduct = () => {
     const consumer = useContext(context);
     const quick_view = consumer[0].quick_view_product;

     return (
          <React.Fragment>
               {quick_view ? <PatternViewProduct item={quick_view} /> : null}
          </React.Fragment>
     );
};

export default QuickViewProduct;
