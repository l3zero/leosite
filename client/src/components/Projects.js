/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import projects from '../data/projects.js'

export default function Projects() {
   let slideIndex = 1

   useEffect(() => {
      showSlides(slideIndex)
   }, [])

   return (
      <div id='projects-container' className='tabcontent'>
         {projects.map((project) => {
            return (
               <div className='mySlides' key={project.title.toLowerCase().trim()}>
                  <a href={project.url}>
                     <img src={require(`../assets/${project.icon}`)} alt='Project Icon'></img>
                     {project.title}
                  </a>

                  <p>
                     {project.desc}
                     <span>
                        <br />
                        <br />
                        {project.tech}
                     </span>
                  </p>
               </div>
            )
         })}
         <a className='prev' onClick={minusSlides}>
            &#10094;
         </a>
         <a className='next' onClick={plusSlides}>
            &#10095;
         </a>
      </div>
   )

   function plusSlides(e) {
      e.preventDefault()
      showSlides((slideIndex += 1))
   }
   function minusSlides(e) {
      e.preventDefault()
      showSlides((slideIndex += -1))
   }

   function showSlides(n) {
      let slides = document.getElementsByClassName('mySlides')
      if (n > slides.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = slides.length
      }
      for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = 'none'
      }
      slides[slideIndex - 1].style.display = 'block'
   }
}
