import React from "react";
import BackToTop from "../back-to-top/BackToTop";
import Breadcrum from "../breadcrumb_background/Breadcrum";
import Footer from "../footer/Footer";
import ContainerHeader from "../header/ContainerHeader";
import "./format-page.css";

const FormatPage = ({ content }) => {
     console.log(content);
     return (
          <div className="format-page">
               <ContainerHeader />
               <Breadcrum />
               {content}
               <Footer />
               <BackToTop />
          </div>
     );
};

export default FormatPage;
