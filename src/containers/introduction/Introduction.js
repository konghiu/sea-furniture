import React, { useEffect } from "react";
import Breadcrum from "../../components/breadcrumb_background/Breadcrum";
import Footer from "../../components/footer/Footer";
import ContainerHeader from "../../components/header/ContainerHeader";
import BackToTop from "../../components/back-to-top/BackToTop";
import "./introduction.css";
import feature_return_top from "../../features/feature_return_top";

const Introduction = () => {
     useEffect(() => {
          return () => {
               feature_return_top();
          };
     }, []);

     return (
          <div className="introduction">
               <ContainerHeader />
               <Breadcrum />
               <div className="content-introduction">
                    <p className="title">Giới thiệu</p>
                    <div className="content">
                         <p>
                              Sea Furniture xây dựng một thương hiệu thân thiện
                              thông qua cách chúng tôi làm sản phẩm và đem sản
                              phẩm đó đến tay của bạn. Một sản phẩm thân thiện
                              được cung cấp bởi một dịch vụ thân thiện chính là
                              Kim chỉ nam để thành công của chúng tôi.
                         </p>
                         <p>
                              Sea Furniture chủ động thay đổi để không ngừng
                              phát triển. Ngoài ra, khách hàng, bằng những sản
                              phẩm của chúng tôi, có thể chủ động trong việc tạo
                              nên phong cách sống riêng biệt trong không gian
                              của mỗi người.
                         </p>
                         <p>
                              Chúng tôi tin rằng: Không gian sống đẹp có thể làm
                              thay đổi chất lượng cuộc sống của bạn. Và chúng
                              tôi mong mỏi truyền tải niềm tin đó đến cho mọi
                              người để ai cũng có một nơi đáng sống.
                         </p>
                         <p>
                              Chúng tôi không chỉ cung cấp sản phẩm nội thất,
                              chúng tôi mang cho bạn phong cách sống. “Less is
                              more” - Một sự đơn giản nhất định nhưng tinh tế
                              trong không gian sống sẽ giúp bạn dễ dàng cân bằng
                              hơn trong cuộc sống
                         </p>
                    </div>
               </div>
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     );
};

export default Introduction;
