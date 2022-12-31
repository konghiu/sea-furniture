import Routers from "./Routers";
import "./assets/icons/font-awesome/css/all.css";
import Provider from "./common/context/provider/Provider";
import Notify from "./components/notify/Notify";

const App = () => {
     return (
          <Provider>
               <Notify />
               <Routers />
          </Provider>
     );
};

export default App;
