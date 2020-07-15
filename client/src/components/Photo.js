import React, {useEffect} from 'react'
import {images} from '../data/images.js'
import '../styles/photoSection.css'

export default function Photo() {
   let imgIndex = 0

   useEffect(() => {
      showPhotos()
   }, [])
   return (
      <React.Fragment>
         <div id='photo-section' style={{gridArea: 'my-photo'}}>
            {images.leo.map((image) => {
               return (
                  <div className='my-photos' key={image.replace('.png', '')}>
                     <img id='my-photo' src={image} alt='Leonid-Yanchis' style={{width: '100%', height: 'auto'}} />
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
                  <img id='resume' src='/download.svg' style={{width: '60%', height: 'auto'}} alt='' />
               </a>
            </header>
         </div>
      </React.Fragment>
   )

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
}
//filter: 'drop-shadow(-5px -5px 10px white)'
