import React, {Component, useEffect} from 'react'
import {skills, miniSkills} from '../data/skills.js'
import {projects} from '../data/projects.js'
import '../styles/myInfo.css'
// import * as PIXI from 'pixi.js'

export default function Info() {
   useEffect(() => {
      // Get the element with id="defaultOpen" and click on it
      // document.getElementById('defaultOpen').click()
   }, [])
   return (
      <React.Fragment>
         <div id='info-section' style={{gridArea: 'my-info'}}>
            <details className='tabs'>
               <summary>
                  <img src='/welcome.png' style={{width: '50px', height: '50px'}} />
               </summary>
               <button id='defaultOpen' className='tablinks' onClick={openDesc}>
                  About Me
               </button>
               <button className='tablinks' onClick={openSkills}>
                  Skills
               </button>
               <button className='tablinks' onClick={openProjects}>
                  Projects
               </button>
            </details>
            <div id='about-me' className='tabcontent'>
               <p>
                  I am a Full Stack Software Developer passionate about Front-End technologies and Web Architectures. In
                  my late teens I got into computer building, video games, music production and photography-inspired
                  art. Later on I decided to align my creativity with Software Engineering when my first daughter was
                  born. I studied at Arizona State's strong SE program. I learned the ins and outs of the SDLC, OS &
                  Networks, Computer Science fundamentals and other aspects of software engineering and design. Close to
                  graduation I realized my interests and passions align in web development and the future is truly
                  exciting.
                  <br />
                  <br />
                  Presently I enjoy working on projects in the Javascript, Node & React eco-system, with a growing
                  fondness for the JAMstack and static site generators. One of my main missions is to create a future
                  web experience that is more lively and animated. With those goals in mind, I plan on learning and
                  utilizing technologies like GreenSock, Pixi.js, Phaser, Web AR/VR and more, while leveraging the
                  immense reusability of the modern web components community.
                  <br />
                  <br />
                  <i>
                     I am currently open to full-time remote roles (contract, freelance, permanent) or on-site in the
                     NYC / NJ / PA area.
                  </i>
               </p>
            </div>
            <div id='skills-container' className='tabcontent'>
               {skills.map((skill) => {
                  return (
                     <React.Fragment>
                        <span className='skill-titles'>
                           <img
                              src={skill.icon}
                              alt=''
                              key={skill.title.toLowerCase().trim()}
                              style={{width: '50px', height: '50px'}}></img>
                           {skill.title}
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
               {/* <div id='mini-skills-container'>
                  {miniSkills.map((skill) => {
                     return (
                        <img
                           src={skill}
                           alt=''
                           style={{
                              width: '50px',
                              height: '50px',
                           }}></img>
                     )
                  })}
               </div> */}
            </div>
            <div id='projects-container' className='tabcontent'>
               {projects.map((project) => {
                  return (
                     <React.Fragment>
                        <span>{project.title}</span>
                        <img src={project.icon} key={project.title.toLowerCase().trim()} alt=''></img>
                        <p>
                           {project.desc}
                           <br />
                           {project.tech}
                        </p>
                     </React.Fragment>
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
