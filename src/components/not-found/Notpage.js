import React from "react";
import BackToTop from "../back-to-top/BackToTop";
import Breadcrum from "../breadcrumb_background/Breadcrum";
import Footer from "../footer/Footer";
import ContainerHeader from "../header/ContainerHeader";
import NotFound from "./component/NotFound";
import "./notpage.css";

const Notpage = () => {
     return (
          <div className="flex flex-col items-center">
               <ContainerHeader />
               <Breadcrum />
               <div className="screen-width">
                    <NotFound />
               </div>
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     );
};

export default Notpage;
