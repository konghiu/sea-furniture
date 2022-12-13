import React from 'react'
import './back-to-top.css'

const BackToTop = () => {

     const handleBackTop = () => {
          let time = 2000;
          const pageYInit = window.pageYOffset;
          const ID_backtop = setInterval(() => {
               const pageY = window.pageYOffset;
               document.documentElement.scrollTop -= (pageYInit * 10) / time;
               console.log(true);
               if(pageY <= 0) {
                    clearInterval(ID_backtop);
               }
          }, time / 1000);
     }

     window.onscroll = () => {
          const pageY = window.pageYOffset;
          if(pageY < window.outerHeight) {
               if(document.querySelector(".back-to-top")) {
                    document.querySelector(".back-to-top").style.opacity = 0;
                    var idHide = setTimeout(() => {
                         document.querySelector(".back-to-top").style.display = 'none';
                    }, 1000)
                    clearTimeout(idHide);
               }
          } else {
               document.querySelector(".back-to-top").style.display = 'flex';
               document.querySelector(".back-to-top").style.opacity = 1;
          }
     }

     return (
          <div 
               className='back-to-top'
               onClick={() => handleBackTop()}
          >
               <div className='container-arrow'>
                    <i className="fa-solid fa-arrow-up"></i>
               </div>
          </div>
     )
}

export default React.memo(BackToTop)