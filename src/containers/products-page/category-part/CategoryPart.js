import React from 'react'
import headerBar from '../../homepage/components/header-bar/headerBar.json'
import './category-part.css'


const CategoryPart = () => {
     return (
          <div className='container-category-part'>
               <div className='title'>
                    <p>DANH MỤC</p>
               </div>
               <div className='content'>
                    <ul>
                         {
                              headerBar.map((item, index) => (
                                   <li key={index}>{item.title}</li>
                              ))
                         }
                    </ul>
               </div>
          </div>
     )
}

export default CategoryPart