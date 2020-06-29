import React, {Component, useEffect} from 'react'
import {skills} from '../data/skills.js'
import {projects} from '../data/projects.js'
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
                     <React.Fragment>
                        <span className='skill-titles'>
                           {skill.title}
                           <img
                              src={skill.icon}
                              alt=''
                              key={skill.title.toLowerCase().trim()}
                              style={{width: '30px', height: '30px'}}></img>
                        </span>
                        <div>
                           <span
                              className='meter'
                              style={{
                                 width: `${skill.percent}%`,
                                 animation: `fill${skill.percent} 1.5s ease-in-out`,
                              }}></span>
                        </div>
                     </React.Fragment>
                  )
               })}
            </div>
            <div id='projects-container' className='tabcontent'>
               {projects.map((project) => {
                  return (
                     <div id={project.title.toLowerCase().trim()} key={project.title.toLowerCase().trim()}>
                        {project.title}
                     </div>
                  )
               })}
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
