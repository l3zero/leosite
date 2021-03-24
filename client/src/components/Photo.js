import React, {useEffect} from 'react'
import images from '../data/images.js'
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
         <div id='photo-section'>
            {images.leo.map((image) => {
               return (
                  <div className='my-photos' key={image.replace('.png', '')}>
                     <img src={require(`../assets/${image}`)} alt='Leonid-Yanchis' />
                  </div>
               )
            })}

            <header>
               <span>Leo</span>
               <span>
                  Software<br></br> Developer
               </span>
               <img id='resume' src={require(`../assets/download.svg`)} onClick={viewResume} alt='View Resume' />
            </header>
         </div>
      </React.Fragment>
   )
}

function viewResume(e) {
   e.preventDefault()
   document.location.assign('/resume')
}
