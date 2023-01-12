import React from "react";
import PatternViewProduct from "../pattern/PatternViewProduct";

const ViewProduct = (props) => {
     const view_product = props.view_product;

     return (
          <React.Fragment>
               {view_product ? (
                    <PatternViewProduct item={view_product} />
               ) : null}
          </React.Fragment>
     );
};

export default ViewProduct;
