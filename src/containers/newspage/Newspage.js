import React from 'react'
import BackToTop from '../../components/back-to-top/BackToTop'
import Breadcrum from '../../components/breadcrumb_background/Breadcrum'
import Footer from '../../components/footer/Footer'
import ContainerHeader from '../../components/header/ContainerHeader'
import NewsItem from '../../components/news-item/NewsItem'
import './news-page.css'


const Newspage = () => {
     return (
          <div className='news-page'>
               <ContainerHeader />
               <Breadcrum />
               <div className='news-content'>
                    <div className='title'>
                         <p>TIN TỨC</p>
                    </div>
                    <div className='container-news-item grid grid-cols-3 gap-8'>
                         <NewsItem />
                         <NewsItem />
                         <NewsItem />
                         <NewsItem />
                         <NewsItem />
                         <NewsItem />
                    </div>
               </div>
               <Footer />

               {/* back to top */}
               <BackToTop />
          </div>
     )
}

export default Newspage