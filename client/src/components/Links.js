import React, {Component} from 'react'
import {links} from '../data/links.js'

export default function Links() {
   return (
      <React.Fragment>
         <div id='links-section' style={{gridArea: 'my-links'}}>
            {links.map((link) => {
               return (
                  <div id={link.title.toLowerCase().trim()} key={link.title.toLowerCase().trim()}>
                     <img src={link.icon} alt='' style={{width: '20px', height: '20px'}}></img>
                     {link.title}
                  </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}
