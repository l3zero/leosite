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
                     <img src={link.icon} alt='' style={{width: '10%', height: 'auto'}}></img>
                     <span>{link.title}</span>
                  </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}
