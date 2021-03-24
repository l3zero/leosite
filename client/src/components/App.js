import React, {Component} from 'react'
// import Intro from './Intro.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Worker} from '@react-pdf-viewer/core'
import ResumePDF from './ResumePDF'
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
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js' />
            <Router>
               <Route exact path='/resume' component={ResumePDF} />
               <Route exact path='/' component={Home} />
            </Router>
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
const Home = () => (
   <React.Fragment>
      <Photo />
      <Links />
      <Info />
   </React.Fragment>
)
export default App
