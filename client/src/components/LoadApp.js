import React, {Component} from 'react'
import App from './App.js'

class LoadApp extends Component {
   state = {loaded: false}
   //    timer = null

   componentDidMount() {
      //   this.timer = setInterval(this.checkStuff, 50)
      this.checkStuff()
   }

   componentWillUnmount() {
      //   clearInterval(this.timer)
   }

   checkStuff() {
      const myBg = document.body.style.background
      document.body.style.background = 'none'
      document.body.onload = (e) => {
         document.body.style.background = myBg
         this.setState({loaded: true})
      }
   }

   render() {
      return this.state.loaded ? (
         <App />
      ) : (
         <img
            src={require('../assets/loader.gif')}
            alt='Loading'
            style={{position: 'absolute', top: '30vh', left: '30vw'}}></img>
      )
   }
}
export default LoadApp
