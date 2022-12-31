import { useEffect } from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import context from "./common/context";
import { NEWSLIST, PRODUCTSLIST } from "./common/context/reducer/actions";
import DetailProduct from "./components/detail-product/DetailProduct";
import useFetch from "./config/useFetch";
import Cartpage from "./containers/cart-page/Cartpage";
import Contactspage from "./containers/contacts-page/Contactspage";
import Homepage from "./containers/homepage/components/Homepage";
import Introduction from "./containers/introduction/Introduction";
import ContainerNewsAll from "./containers/newspage/components/ContainerNewsAll";
import ContainerNewsSearch from "./containers/newspage/components/ContainerNewsSearch";
import Newspage from "./containers/newspage/Newspage";
import Paymentpage from "./containers/paymentpage/Paymentpage";
import SearchProducts from "./containers/products-page/container/search-products/SearchProducts";
import Productspage from "./containers/products-page/Productspage";
import Loginpage from "./containers/signpage/containers/Loginpage";
import Logoutpage from "./containers/signpage/containers/Logoutpage";
import Registerpage from "./containers/signpage/containers/Registerpage";
import Signpage from "./containers/signpage/Signpage";
import UserAddresses from "./containers/user-account/container/addresses/UserAddresses";
import UserChangepassword from "./containers/user-account/container/change-password/UserChangepassword";
import InfoUserAccount from "./containers/user-account/container/info-user/InfoUserAccount";
import UserCartTransaction from "./containers/user-account/container/user-cart-transaction/UserCartTransaction";
import UserAccountpage from "./containers/user-account/UserAccountpage";

const Routers = () => {
     const consumer = useContext(context);
     const dispatch = consumer[1];

     const news_api = useFetch("/api/news");
     const products_api = useFetch("/api/products");

     useEffect(() => {
          if (news_api && products_api) {
               dispatch(NEWSLIST(news_api.news));
               dispatch(PRODUCTSLIST(products_api.products));
          }
     }, [news_api, products_api]);

     return (
          <Router>
               <Routes>
                    <Route path="" element={<Homepage />} />
                    <Route path="sea-furniture" element={<Homepage />} />
                    <Route
                         path="/sea-furniture/homepage"
                         element={<Homepage />}
                    />
                    <Route
                         path="sea-furniture/introduction"
                         element={<Introduction />}
                    />
                    <Route path="sea-furniture/news" element={<Newspage />}>
                         <Route path="" element={<ContainerNewsAll />} />
                         <Route
                              path=":search"
                              element={<ContainerNewsSearch />}
                         />
                    </Route>
                    <Route
                         path="sea-furniture/contacts"
                         element={<Contactspage />}
                    />
                    <Route
                         path="sea-furniture/products"
                         element={<Productspage />}
                    />
                    <Route
                         path="sea-furniture/products/:type_product"
                         element={<Productspage />}
                    />
                    <Route
                         path="sea-furniture/products/search/:search"
                         element={<SearchProducts />}
                    />
                    <Route
                         path="sea-furniture/products/product/:product"
                         element={<DetailProduct />}
                    />
                    <Route
                         path="sea-furniture/payment"
                         element={<Paymentpage />}
                    />
                    <Route path="sea-furniture/cart" element={<Cartpage />} />
                    <Route path="sea-furniture/sign" element={<Signpage />}>
                         <Route path="" element={<Loginpage />} />
                         <Route path="login" element={<Loginpage />} />
                         <Route path="register" element={<Registerpage />} />
                         <Route path="logout" element={<Logoutpage />} />
                    </Route>
                    <Route
                         path="sea-furniture/account"
                         element={<UserAccountpage />}
                    >
                         <Route path="" element={<InfoUserAccount />} />
                         <Route
                              path="transaction"
                              element={<UserCartTransaction />}
                         />
                         <Route
                              path="changepassword"
                              element={<UserChangepassword />}
                         />
                         <Route path="addresses" element={<UserAddresses />} />
                    </Route>
               </Routes>
          </Router>
     );
};

export default Routers;
