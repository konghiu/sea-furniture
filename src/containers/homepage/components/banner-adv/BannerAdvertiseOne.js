import React from 'react'
import adv_img_1 from '../.././../../assets/profile/adv_img_1.webp'
import adv_img_2 from '../.././../../assets/profile/adv_img_2.webp'
import './banner_adv.css'

const BannerAdvertiseOne = () => {
     return (
          <div className='banner-adv-1'>
               <div>
                    <img src={adv_img_1} alt='' />
                    <p>PHÒNG BẾP</p>
               </div>
               <div>
                    <img src={adv_img_2} alt='' />
                    <p>PHÒNG KHÁCH</p>
               </div>
          </div>
     )
}

export default BannerAdvertiseOne