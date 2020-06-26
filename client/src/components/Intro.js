import React, {Component} from 'react'

export default function Intro() {
   return (
      <React.Fragment>
         <div id='intro-question'>
            Do you crave <span>Responsive</span>
            <span>Optimized</span>
            <span>Lively</span>
            <span>Compatible</span>
            <span>Secure</span>
            <span>Sleek</span>?
         </div>
         <div id='intro-answer'>What a coincidence. So do I.</div>
         <img
            src={require('../img/Main-Leo-Job-Photo-2.jpg')}
            alt='Leonid-Yanchis-Photo'
            style={{width: '200px', height: '200px'}}
         />
         <div id='intro-statement'>Hi. My name is Leo and I love the world of web development.</div>
      </React.Fragment>
   )
}
