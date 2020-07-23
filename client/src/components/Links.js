import React from 'react'
import links from '../data/links.js'
import '../styles/linksSection.css'
// const links = require('../data/links.js')

export default function Links() {
   return (
      <React.Fragment>
         <div id='links-section' style={{gridArea: 'my-links'}}>
            {links.map((link) => {
               return (
                  <div id={link.title.toLowerCase().trim()} key={link.title.toLowerCase().trim()}>
                     <a href={link.url}>
                        <img src={require(`../assets/${link.icon}`)} alt={link.title}></img>
                        {link.title}
                     </a>
                  </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}
