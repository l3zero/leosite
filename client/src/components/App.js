import React, {Component} from 'react'
import Intro from './Intro.js'
import Photo from './Photo.js'
import Links from './Links.js'
import Info from './Info.js'

class App extends Component {
   render() {
      return (
         <React.Fragment>
            {/* <Intro /> */}
            <Photo />
            <Links />
            <Info />
         </React.Fragment>
      )
   }
}

export default App
