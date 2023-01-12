import React, { useEffect, useState } from "react";
import Product from "../../../../components/products/Product";
import "./new-products.css";
import Slider from "react-slick";
import ComponentWaitLoad from "../../../../components/loading/ComponentWaitLoad";

const settings = {
     dots: false,
     infinite: false,
     speed: 500,
     slidesToShow: 5,
     slidesToScroll: 3,
     arrows: true,
};

const NewProducts = (props) => {
     const [new_products, setNew_products] = useState(null);

     useEffect(() => {
          const list = props.list_products;
          if (Array.isArray(list)) {
               let new_list = [];
               for (let i = list.length - 1; i > 0; i--) {
                    new_list.push(list[i]);
                    if (i === 0 || new_list.length === 7) break;
               }
               setNew_products(new_list);
          }
     }, [props.list_products]);

     return (
          <div className="new-products">
               <div className="col-1 container-topic">
                    <div className="topic">
                         <p>SẢN PHẨM MỚI VỀ</p>
                    </div>
               </div>
               <React.Fragment>
                    {new_products ? (
                         <Slider {...settings} className="col-2">
                              {new_products.map((item) => (
                                   <Product key={item.id} item={item} />
                              ))}
                         </Slider>
                    ) : (
                         <ComponentWaitLoad />
                    )}
               </React.Fragment>
          </div>
     );
};

export default NewProducts;
