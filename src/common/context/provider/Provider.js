import React, { useReducer } from 'react'
import context from '../'
import ReducerStore, { initStore } from '../reducer/Reducer'
import { VirtualServer } from '../../../mocks/virtual-server/VirtualServer';

if (process.env.NODE_ENV === 'development') {
     VirtualServer({ environment: 'development' });
   } 

const Provider = ({children}) => {

     const [ value, dispatch ] = useReducer(ReducerStore, initStore);

     return (
          <context.Provider value={[value, dispatch]}>
               {children}
          </context.Provider>
     )
}

export default Provider