import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from "./components/back-to-top/BackToTop";
import Breadcrum from "./components/breadcrumb_background/Breadcrum";
import Footer from "./components/footer/Footer";
import ContainerHeader from "./components/header/ContainerHeader";
import feature_return_top from "./features/feature_return_top";

const SeaFurniture = () => {
     const location = useLocation();

     useEffect(() => {
          feature_return_top();
     }, [location.pathname]);

     return (
          <div className="flex flex-col items-center">
               <ContainerHeader />
               <Breadcrum />
               <div className="screen-width flex flex-col items-center">
                    <Outlet />
               </div>
               <Footer />
               <BackToTop />
          </div>
     );
};

export default SeaFurniture;
