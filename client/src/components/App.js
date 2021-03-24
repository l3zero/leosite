import React, {Component} from 'react'
// import Intro from './Intro.js'
import Photo from './Photo.js'
import Links from './Links.js'
import Info from './Info.js'
import {createTimeline, editIntro} from '../animation/animationController.js'
import '../styles/index.css'

class App extends Component {
   componentDidMount() {
      if (window.innerWidth <= 600) {
         let intro = createTimeline()
         const elements = [
            '.my-photos',
            'header > span:nth-child(1)',
            'header > span:nth-child(2)',
            'header > a',
            '#skills-container',
            '#links-section',
            'summary',
         ]
         editIntro(intro, elements)
      }
   }
   render() {
      return (
         <React.Fragment>
            <Photo />
            <Links />
            <Info />
            {/* Removing job status for now - need to make its own component */}
            {/* <div id='job-status'>
               <span>
                  Work Status:
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;Contract&#10003;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Freelance&#10003;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Permanent&#10003;
                  <br />
                  Locations:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Remote / NYC / NJ&#10003;
               </span>
            </div> */}
         </React.Fragment>
      )
   }
}

export default App
