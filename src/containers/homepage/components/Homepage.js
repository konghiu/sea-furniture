import React, { useContext, useEffect } from "react";
import Header from "../../../components/header/Header";
import "../style/homepage.css";
import HeaderBar from "../../../components/header/header-bar/HeaderBar";
import SectionCategory from "../../../components/section-category/SectionCategory";
import FeaturedProducts from "./featured-products/FeaturedProducts";
import BannerAdvertiseOne from "./banner-adv/BannerAdvertiseOne";
import HotProducts from "./hot-products/HotProducts";
import BannerAdvertiseTwo from "./banner-adv/BannerAdvertiseTwo";
import NewProducts from "./new-products/NewProducts";
import GoodTips from "./good-tips/GoodTips";
import Footer from "../../../components/footer/Footer";
import BackToTop from "../../../components/back-to-top/BackToTop";
import context from "../../../common/context";
import feature_return_top from "../../../features/feature_return_top";

const Homepage = () => {
     const consumer = useContext(context);
     const list_products = consumer[0].products_list;
     const list_news = consumer[0].news_list;

     useEffect(() => {
          feature_return_top();
     }, []);

     return (
          <div className="homepage">
               <div className="homepage-banner">
                    <div className="flex flex-col items-center">
                         <Header />
                         <HeaderBar />
                    </div>
               </div>
               <SectionCategory />
               <FeaturedProducts list_products={list_products} />
               <BannerAdvertiseOne />
               <HotProducts list_products={list_products} />
               <BannerAdvertiseTwo />
               <NewProducts list_products={list_products} />
               <GoodTips list_news={list_news} />
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     );
};

export default Homepage;
