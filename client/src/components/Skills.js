import React from 'react'
import {skills} from '../data/skills.js'

export default function Skills() {
   return (
      <div id='skills-container' className='tabcontent'>
         {skills.map((skill) => {
            return (
               <React.Fragment key={skill.title.toLowerCase().trim()}>
                  <span className='skill-titles'>
                     <img src={skill.icon} alt='Skill icon'></img>
                     {skill.title}
                  </span>
                  <div>
                     <span
                        className='meter'
                        style={{
                           width: `${skill.percent}%`,
                           animation: `fill${skill.percent} 1.5s cubic-bezier(.29,.23,0,.81)`,
                        }}></span>
                  </div>
               </React.Fragment>
            )
         })}
      </div>
   )
}
