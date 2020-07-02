import React, {Component} from 'react'
import {links} from '../data/links.js'
import '../styles/linksSection.css'

export default function Links() {
   return (
      <React.Fragment>
         <div id='links-section' style={{gridArea: 'my-links'}}>
            {links.map((link) => {
               return (
                  <div id={link.title.toLowerCase().trim()} key={link.title.toLowerCase().trim()}>
                     <a href={link.url}>
                        <img src={link.icon} alt={link.title} style={{width: '10%', height: 'auto'}}></img>
                     </a>
                  </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}
