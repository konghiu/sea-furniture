import React from 'react'
import ContainerHeader from '../../components/header/ContainerHeader'
import Breadcrum from '../../components/breadcrumb_background/Breadcrum'
import Footer from '../../components/footer/Footer'
import './contacts-page.css'
import BackToTop from '../../components/back-to-top/BackToTop'

const Contactspage = () => {
     return (
          <div className='contacts-page'>
               <ContainerHeader />
               <Breadcrum />
               <div className='content'>
                    <div className='col-1'>
                         <div className='info-store'>
                              <p className='locate'>
                                   <span>
                                        <i className="fa-solid fa-location-dot"></i>
                                   </span>
                                   Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội
                              </p>
                              <p className='phone'>
                                   <span>
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                   </span>
                                   1900 1010
                              </p>
                              <p className='email'>
                                   <span>
                                        <i className="fa-regular fa-envelope"></i>
                                   </span>
                                   seateam@gmail.com
                              </p>
                         </div>
                         <div className='container-form-contacts'>
                              <p className='title'>Liên hệ</p>
                              <form className='form-contacts'>
                                   <input 
                                        type="text"
                                        placeholder="Họ và tên"
                                   />
                                   <input 
                                        type="email"
                                        placeholder="Email"
                                   />
                                   <textarea 
                                        type="text"
                                        placeholder="Nội dung"
                                   />
                              </form>
                         </div>
                    </div>
                    <div className='col-2'>
                         <iframe title="ggmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18289.9628399494!2d106.65314299625342!3d10.75448997540533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef6d3f19853%3A0x246af0e8b3aaf097!2zQ2jDuWEgQsOgIFRoacOqbiBI4bqtdSAtIFR14buHIFRow6BuaCBI4buZaSBRdcOhbg!5e0!3m2!1svi!2s!4v1669128734273!5m2!1svi!2s" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     )
}

export default Contactspage