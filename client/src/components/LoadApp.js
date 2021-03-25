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
            style={{position: 'fixed', top: '40%', left: '40%'}}></img>
      )
   }
}
export default LoadApp
