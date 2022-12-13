import React from 'react'
import './pattern-button.css'

const Button = (props) => {

     return (
          <div className='pattern-button'>
               <button>{props.type}</button>
          </div>
     )
}

export default React.memo(Button)