import React from 'react'

const intial = 0;

const reducer = (state = intial, action) => {
     const type = action.type;
     switch (type) {
          case 'INCREASE':
               
               break;
     
          default:
               throw Error();
     }
}

const App = () => {



     return (
          <div>App</div>
     )
}

export default App