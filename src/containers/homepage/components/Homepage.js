import React, { useContext, useEffect, useState } from "react";
import Header from "../../../components/header/Header";
import "../style/homepage.css";
import HeaderBar from "./header-bar/HeaderBar";
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
import useFetch from "../../../config/useFetch";

const Homepage = () => {
     const [list_products, setList_products] = useState(null);

     const api = useFetch("/api/products");
     useEffect(() => {
          setList_products(api.products);
     }, [api]);

     return (
          <div className="homepage">
               <div className="homepage-banner">
                    <div className="screen-width">
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
               <GoodTips />
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     );
};

export default Homepage;
