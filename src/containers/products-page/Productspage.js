import React from 'react'
import ContainerHeader from '../../components/header/ContainerHeader'
import Breadcum from '../../components/breadcrumb_background/Breadcrum'
import SectionCategory from '../../components/section-category/SectionCategory'
import CategoryPart from './category-part/CategoryPart'
import Footer from '../../components/footer/Footer'
import './products-page.css'
import BrandsPart from './brands-part/BrandsPart'
import PriceRangePart from './price-range-part/PriceRangePart'
import ColorsPart from './colors-part/ColorsPart'
import ContainerListProducts from './container-products/ContainerListProducts'
import BackToTop from '../../components/back-to-top/BackToTop'

const Productspage = () => {
     return (
          <div className='container-products-page'>
               <ContainerHeader />
               <Breadcum />
               <SectionCategory />
               <div className='content'>
                    <div className='col-1'>
                         <CategoryPart />
                         <BrandsPart />
                         <PriceRangePart />
                         <ColorsPart />
                    </div>
                    <div className='col-2'>
                         <ContainerListProducts />
                    </div>
               </div>
               <Footer />
               {/* back to top */}
               <BackToTop />
          </div>
     )
}

export default Productspage