import React from 'react'
import news_item_1 from '../../assets/profile/news_item_1.webp'
import './news-item.css'


const NewsItem = () => {
     return (
          <div className='container-news-item'>
               <div className='container-img'> 
                    <img src={news_item_1} alt='' />
                    <p></p>
               </div>
               <div className='container-title'>
                    <p className='title'>Mẹo bảo quản và vệ sinh các đồ nội thất</p>
                    <p className='describe'>Đối với nội thất bằng kim loại - Khi xử lý các vết bẩn thông thường, bạn chỉ cần ...</p>
               </div>
          </div>
     )
}

export default NewsItem