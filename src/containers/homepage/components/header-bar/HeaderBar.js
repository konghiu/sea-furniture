import React from 'react'
import headerBar from './headerBar.json'
import './headerBar.css'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
     return (
          <div className='flex justify-between items-center'>
               <div className='block-title'>
                    <div className='container-bars'>
                         <span className='bars'></span>
                    </div>
                    <h4>DANH MỤC SẢN PHẨM</h4>
               </div>
               <ul className='nav'>
                    {
                         headerBar.map((item, index) => {
                              return (
                                   <li className='sub-link sub-link-level0' key={index}>
                                        <Link className='main-link' to={item.to}>{item.title}</Link>
                                        {
                                             item.isContent
                                             &&
                                             <React.Fragment>
                                                  <div className='sub-open-button'></div>
                                                  <ul className='sub-menu sub-menu-level0'>
                                                            {item.content.map((child, inChild) => (
                                                                 <li className='sub-link sub-link-level1' key={inChild}>
                                                                      <Link to={item.to + child.to}>{child.title}</Link>
                                                                      {
                                                                           child.isContent
                                                                           &&
                                                                           <React.Fragment>
                                                                                <div className='sub-open-button'></div>
                                                                                <ul className='sub-menu sub-menu-level1'>
                                                                                          {child.content.map((navLis, inNavLis) => (
                                                                                               <li className='sub-link sub-link-level2' key={inNavLis}>
                                                                                                    <Link to={item.to + child.to +navLis.to}>{navLis.title}</Link>
                                                                                               </li>
                                                                                          ))}
                                                                                </ul>
                                                                           </React.Fragment>
                                                                      }
                                                                 </li>
                                                            ))}
                                                  </ul>
                                             </React.Fragment>
                                        }
                                   </li>
                              ) 
                         })
                    }
               </ul>
               <div className='hotline'>
                    <p className=''>Hotline:</p>
                    <h2>1900 1010</h2>
               </div>
               
          </div>
     )
}

export default HeaderBar