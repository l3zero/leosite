import React, {Component, useEffect} from 'react'
import {skills} from '../data/skills.js'
import {projects} from '../data/projects.js'
import '../styles/myInfo.css'

export default function Info() {
   useEffect(() => {
      // Get the element with id="defaultOpen" and click on it
      document.getElementById('defaultOpen').click()
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
               <p>
                  I am a Full Stack Software Developer passionate about Front-End technologies and Web Architectures. In
                  my early 20's I got into computer building, video games, music production and photography-inspired
                  art. I aligned my creativity and love for art & design with Software Engineering when my first
                  daughter was born. I spent 4 years in Arizona State's strong SE curriculum. I learned the ins and outs
                  of the SDLC, OS & Networks, Computer Science fundamentals and all aspects of software engineering in
                  various fields. Close to graduation I completely fell in love with web development and the endless
                  possibilities it provides. I quickly realized all my interests and passions align in web development
                  and the future is truly exciting.
                  <br />
                  <br />
                  Currently I enjoy working on projects (personal and freelance) in the Javascript, Node & React
                  eco-system, with a growing fondness for the JAMstack and static site generators. I'm always reading
                  weekly newsletters and trying out new frameworks in my personal projects. One of my main missions is
                  to create a future web experience that is more lively and animated. With those goals in mind, I plan
                  on learning and utilizing technologies like GreenSock, Pixi.js, Phaser, Web AR/VR and more, while
                  leveraging the immense reusability of the modern web components community.
               </p>
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
