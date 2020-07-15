import React from 'react'
import {projects} from '../data/projects.js'
import {skills, miniSkills} from '../data/skills.js'

export default function Skills() {
   return (
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
   )
}
