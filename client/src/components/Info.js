import React, {Component, useEffect} from 'react'
import {skills} from '../data/skills.js'
import '../styles/myInfo.css'

export default function Info() {
   useEffect(() => {
      // Get the element with id="defaultOpen" and click on it
      document.getElementById('defaultOpen').click()
      return () => {
         // cleanup
      }
   }, [])
   return (
      <React.Fragment>
         <div id='info-section' style={{gridArea: 'my-info'}}>
            <div className='tabs'>
               <button id='defaultOpen' className='tablinks' onClick={openDesc}>
                  About Me
               </button>
               <button className='tablinks' onClick={openSkills}>
                  Skills
               </button>
               <button className='tablinks' onClick={openProjects}>
                  Projects
               </button>
            </div>
            <div id='about-me' className='tabcontent'>
               <p>About me blah blah blah</p>
            </div>
            <div id='skills-container' className='tabcontent'>
               {skills.map((skill) => {
                  return (
                     <div id={link.title.toLowerCase().trim()} key={link.title.toLowerCase().trim()}>
                        <img src={link.icon} alt='' style={{width: '20px', height: '20px'}}></img>
                        {link.title}
                     </div>
                  )
               })}

               {/* <span className='skill-titles'>Javascript</span>
               <div>
                  <span className='meter'></span>
               </div>
               <span className='skill-titles'>NodeJS</span>
               <div>
                  <span className='meter' style={{width: '55%', animation: 'fill55 1.5s ease-in-out'}}></span>
               </div>
               <span className='skill-titles'>ReactJS</span>
               <div>
                  <span className='meter' style={{width: '55%', animation: 'fill55 1.5s ease-in-out'}}></span>
               </div>
               <span className='skill-titles'>CSS / HTML</span>
               <div>
                  <span className='meter' style={{width: '65%', animation: 'fill65 1.5s ease-in-out'}}></span>
               </div>

               <span className='skill-titles'>Linux / Bash</span>
               <div>
                  <span className='meter' style={{width: '55%', animation: 'fill55 1.5s ease-in-out'}}></span>
               </div>
               <span className='skill-titles'>Team Management</span>
               <div>
                  <span className='meter' style={{width: '70%'}}></span>
               </div> */}
            </div>
            <div id='projects' className='tabcontent'>
               <div>
                  <a href='/'>this</a> 🙃
               </div>
               <div>
                  <a href='https://leo-weather1337.herokuapp.com/'>Weather</a> ⛅
               </div>
            </div>
         </div>
      </React.Fragment>
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
   document.getElementById('about-me').style.display = 'inherit'
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
   document.getElementById('projects').style.display = 'flex'
   e.currentTarget.className += ' active'
}
