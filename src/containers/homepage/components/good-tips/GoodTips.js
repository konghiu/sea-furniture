import React from 'react'
import NewsItem from '../../../../components/news-item/NewsItem'
import './good-tips.css'

const GoodTips = () => {
     return (
          <div className='good-tips grid grid-cols-3 gap-10'>
               <NewsItem />
               <NewsItem />
               <NewsItem />
          </div>
     )
}

export default GoodTips