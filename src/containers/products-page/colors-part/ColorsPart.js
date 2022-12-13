import React from 'react'
import colors_list from './colors-list.json'
import './colors-part.css'

const ColorsPart = () => {
     return (
          <div className='container-colors-part'>
               <div className='title'>
                    <p>DANH MỤC</p>
               </div>
               <div className='content'>
                    <ul>
                         {
                              colors_list.map((item) => (
                                   <li key={item.id} style={{'backgroundColor': item.name_color}}></li>
                              ))
                         }
                    </ul>
               </div>
          </div>
     )
}

export default ColorsPart