import Routers from './Routers';
import './assets/icons/font-awesome/css/all.css'
import Provider from './common/context/provider/Provider';

const App = () => {
     return (
          <Provider>
               <Routers />          
          </Provider>
     );
};
  
export default App;