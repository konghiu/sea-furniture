import Routers from "./Routers";
import "./assets/icons/font-awesome/css/all.css";
import Provider from "./common/context/provider/Provider";
import Notify from "./components/notify/Notify";
import QuickViewProduct from "./components/products/quick-view-product/QuickViewProduct";

const App = () => {
     return (
          <Provider>
               <Notify />
               <QuickViewProduct />
               <Routers />
          </Provider>
     );
};

export default App;
