import React from 'react'
import SectionPolicy from './section-policy/SectionPolicy'
import './footer.css'
import MidFooter from './mid-footer/MidFooter'

const Footer = () => {
     return (
          <div className='footer'>
               <SectionPolicy />
               <MidFooter />
          </div>
     )
}

export default Footer