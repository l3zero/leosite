import React, {useEffect} from 'react'
import '../styles/myInfo.css'
import About from './About.js'
import Projects from './Projects.js'
import Skills from './Skills.js'
// import * as PIXI from 'pixi.js'

export default function Info() {
   useEffect(() => {
      // Get the element with id="defaultOpen" and click on it
      document.getElementById('defaultOpen').click()
   }, [])
   return (
      <div id='info-section' style={{gridArea: 'my-info'}}>
         <aside>
            <details className='tabs'>
               <summary>
                  <img src='/welcome.png' style={{width: '50px', height: '50px'}} />
               </summary>
               <button id='defaultOpen' className='tablinks' onClick={openDesc}>
                  About
               </button>
               <button className='tablinks' onClick={openSkills}>
                  Skills
               </button>
               <button className='tablinks' onClick={openProjects}>
                  Projects
               </button>
            </details>
         </aside>
         <About />
         <Skills />
         <Projects />
      </div>
   )
}
function openDesc(e) {
   e.preventDefault()
   const tabcontent = document.getElementsByClassName('tabcontent')
   for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
   }
   const tablinks = document.getElementsByClassName('tablinks')
   for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
   }
   document.getElementById('about-me').style.display = 'flex'
   e.currentTarget.className += ' active'
}

function openSkills(e) {
   e.preventDefault()
   const tabcontent = document.getElementsByClassName('tabcontent')
   for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
   }
   const tablinks = document.getElementsByClassName('tablinks')
   for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
   }
   document.getElementById('skills-container').style.display = 'flex'
   // document.getElementById('mini-skills-container').style.display = 'flex'
   e.currentTarget.className += ' active'
}

function openProjects(e) {
   e.preventDefault()
   const tabcontent = document.getElementsByClassName('tabcontent')
   for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
   }
   const tablinks = document.getElementsByClassName('tablinks')
   for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
   }
   document.getElementById('projects-container').style.display = 'flex'
   e.currentTarget.className += ' active'
}
