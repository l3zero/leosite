import React, {Component} from 'react'
import {links} from '../data/links.js'

export default function Links() {
   return (
      <React.Fragment>
         <div id='links-section' style={{gridArea: 'my-links'}}>
            {links.map((link) => {
               return (
                  <div id={link.title.toLowerCase().trim()} key={link.title.toLowerCase().trim()}>
                     <img src={require(link.image)} alt=''></img>
                  </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}
