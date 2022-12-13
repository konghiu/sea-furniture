import React, { useContext } from 'react'
import { context } from './App'

const Test = () => {

     const counter = useContext(context);

     return (
          <div>
               {counter}
          </div>
     )
}

export default Test