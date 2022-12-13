import React from 'react'
import { Link } from 'react-router-dom'
import hours24 from '../../../assets/profile/24-hours.svg' 
import logo from '../../../assets/profile/logo.webp'
import headerBar from '../../../containers/homepage/components/header-bar/headerBar.json'

const MidFooter = () => {
     return (
          <div className='mid-footer'>
               <div className='col-1'>
                    <div>
                         <img src={logo} alt='' />
                    </div>
                    <p className='title'>Siêu thị nội thất Sea Furniture</p>
                    <p className='address'>Trụ sở chính: Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội</p>
                    <p className='phone'>Hotline: 1900 6750</p>
                    <p className='email'>Email: seateam@gmail.com</p>
               </div>
               <div className='col-2'>
                    <p className='title'>VỀ CHÚNG TÔI</p>
                    <ul className='content'>
                         {
                              headerBar.map((item, index) => {
                                   return <li key={index}><Link>{item.title[0] + item.title.slice(1).toLowerCase()}</Link></li>
                              })
                         }
                    </ul>
               </div>
               <div className='col-3'>
                    <p className='title'>TIN KHUYẾN MÃI</p>
                    <ul className='content'>
                         {
                              headerBar.map((item, index) => {
                                   return <li key={index}>{item.title[0] + item.title.slice(1).toLowerCase()}</li>
                              })
                         }
                    </ul>
               </div>
               <div className='col-4'>
                    <p className='title'>TỔNG ĐÀI HỖ TRỢ</p>
                    <div className='content'>
                         <div className='container-img'>
                              <img src={hours24} alt=''/>
                         </div>
                         <p>1900 1010</p>
                    </div>
                    <p className='title'>NHẬN TIN KHUYẾN MÃI</p>
                    <div className='content'>
                         <input 
                              placeholder='Nhập email'
                         />
                         <button>Đăng ký</button>
                    </div>
               </div>
          </div>
     )
}

export default MidFooter