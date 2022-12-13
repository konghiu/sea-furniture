import React from 'react'
import brandslist from './brandslist.json'
import './brandslist.css'

const BrandsPart = () => {
     return (
          <div className='container-brandslist-part'>
               <div className='title'>
                    <p>THƯƠNG HIỆU</p>
               </div>
               <div className='content'>
                    <form>
                         {
                              brandslist.map((item) => (
                                   <div key={item.id}>
                                        <input 
                                             type="checkbox" 
                                        />
                                        <label>{item.brand}</label>
                                   </div>
                              ))
                         }
                    </form>
               </div>
          </div>
     )
}

export default BrandsPart