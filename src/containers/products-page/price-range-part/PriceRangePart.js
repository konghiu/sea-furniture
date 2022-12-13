import React from 'react'
import price_range_list from './price-range-list.json'
import './price-range-part.css'

const PriceRangePart = () => {
     return (
          <div className='container-pricerange-part'>
               <div className='title'>
                    <p>KHOẢNG GIÁ</p>
               </div>
               <div className='content'>
                    <ul>
                         {
                              price_range_list.map((item, index) => {
                                   if(item.id === 1) {
                                        return (
                                             <div key={index}>
                                                  <input 
                                                       type='radio'
                                                  />
                                                  <label key={index}>Giá dưới {item['price-max']}</label>
                                             </div>
                                        )
                                   } else if(item.id !== price_range_list.length) {
                                        return (
                                             <div key={index}>
                                                  <input 
                                                       type='radio'
                                                  />
                                                  <label key={item.id}>{item['price-min']}đ - {item['price-max']}đ</label>
                                             </div>
                                        )
                                   } else {
                                        return (
                                             <div key={index}>
                                                  <input 
                                                       type='radio'
                                                  />
                                                  <label key={price_range_list.length}>Giá trên {item['price-min']}</label>
                                             </div>
                                        )
                                   }
                              })
                         }
                    </ul>
               </div>
          </div>
     )
}

export default PriceRangePart