import React, {Component} from 'react'
import Intro from './Intro.js'
import Photo from './Photo.js'
import Links from './Links.js'

class App extends Component {
   render() {
      return (
         <React.Fragment>
            {/* <Intro /> */}
            <Photo />
            <Links />
         </React.Fragment>
      )
   }
}

export default App
