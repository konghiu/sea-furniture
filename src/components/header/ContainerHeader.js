import React from "react";
import HeaderBar from "./header-bar/HeaderBar";
import Header from "./Header";
import "./header.css";

const ContainerHeader = () => {
     return (
          <div className="container-header">
               <div className="content-header">
                    <Header />
                    <HeaderBar />
               </div>
          </div>
     );
};

export default ContainerHeader;
