import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailProduct from "./components/detail-product/DetailProduct";
import Cartpage from "./containers/cart-page/Cartpage";
import Contactspage from "./containers/contacts-page/Contactspage";
import Homepage from "./containers/homepage/components/Homepage";
import Introduction from "./containers/introduction/Introduction";
import Newspage from "./containers/newspage/Newspage";
import Productspage from "./containers/products-page/Productspage";
import Loginpage from "./containers/signpage/containers/Loginpage";
import Registerpage from "./containers/signpage/containers/Registerpage";
import Signpage from "./containers/signpage/Signpage";
import UserAddresses from "./containers/user-account/container/addresses/UserAddresses";
import UserChangepassword from "./containers/user-account/container/change-password/UserChangepassword";
import InfoUserAccount from "./containers/user-account/container/info-user/InfoUserAccount";
import UserCartTransaction from "./containers/user-account/container/user-cart-transaction/UserCartTransaction";
import UserAccountpage from "./containers/user-account/UserAccountpage";

const Routers = () => {
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
                    <Route path="sea-furniture/news" element={<Newspage />} />
                    <Route
                         path="sea-furniture/contacts"
                         element={<Contactspage />}
                    />
                    <Route
                         path="sea-furniture/products"
                         element={<Productspage />}
                    />
                    <Route
                         path="sea-furniture/products/:product"
                         element={<DetailProduct />}
                    />
                    <Route path="sea-furniture/cart" element={<Cartpage />} />
                    <Route path="sea-furniture/sign" element={<Signpage />}>
                         <Route path="" element={<Loginpage />} />
                         <Route path="login" element={<Loginpage />} />
                         <Route path="register" element={<Registerpage />} />
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
