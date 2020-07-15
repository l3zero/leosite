import React, {Component} from 'react'
import Intro from './Intro.js'
import Photo from './Photo.js'
import Links from './Links.js'
import Info from './Info.js'
import Goo from 'gooey-react'
import '../styles/index.css'

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <div id='goo1'>
               <Goo>
                  <svg width='10vw' height='10vh'>
                     <circle id='circ1' cx='37%' cy='37%' fill='orchid' r='32' />
                     <circle id='circ2' cx='63%' cy='63%' fill='mediumorchid' r='32' />
                  </svg>
               </Goo>
            </div>
            {/* <Intro /> */}
            <Photo />
            <Links />
            <Info />
         </React.Fragment>
      )
   }
}

export default App
