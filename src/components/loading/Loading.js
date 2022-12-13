import React from "react";
import "./loading.css";

const Loading = () => {
     return (
          <div className="container-loading">
               <div className="loading">
                    <div className="container-icon-loading"></div>
               </div>
               <div className="container-component-loading"></div>
          </div>
     );
};

export default Loading;
