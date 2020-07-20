import React, {useEffect} from 'react'
import {images} from '../data/images.js'
import '../styles/photoSection.css'

export default function Photo() {
   useEffect(() => {
      let imgIndex = 0
      function showPhotos() {
         let slides = document.getElementsByClassName('my-photos')
         for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'
         }
         imgIndex++
         if (imgIndex > slides.length) {
            imgIndex = 1
         }
         slides[imgIndex - 1].style.display = 'block'
         setTimeout(showPhotos, Math.floor(Math.random() * 10001) + 5000) // Change image every 5-10s
      }
      showPhotos()
   }, [])
   return (
      <React.Fragment>
         <div id='photo-section' style={{gridArea: 'my-photo'}}>
            {images.leo.map((image) => {
               return (
                  <div className='my-photos' key={image.replace('.png', '')}>
                     <img src={image} alt='Leonid-Yanchis' />
                  </div>
               )
            })}

            <header>
               <span>Leo</span>
               <span>
                  Software<br></br> Developer
               </span>
               <a
                  href='/Leonid_Yanchis2020.pdf'
                  target='_blank'
                  type='application/pdf'
                  download
                  referrerPolicy='no-referrer'>
                  <img id='resume' src='/download.svg' alt='Download Resume' />
               </a>
            </header>
         </div>
      </React.Fragment>
   )
}
