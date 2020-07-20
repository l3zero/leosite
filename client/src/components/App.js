import React, {Component} from 'react'
import Intro from './Intro.js'
import Photo from './Photo.js'
import Links from './Links.js'
import Info from './Info.js'
import '../styles/index.css'

class App extends Component {
   render() {
      return (
         <React.Fragment>
            {/* <Intro /> */}
            <Photo />
            <Links />
            <Info />
            <div id='job-status'>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;Remote or NYC / NJ&#10003;
               </span>
            </div>
         </React.Fragment>
      )
   }
}

export default App
