import {gsap} from 'gsap'
import {TextPlugin} from 'gsap/TextPlugin.js'
import {MotionPathPlugin} from 'gsap/MotionPathPlugin.js'
gsap.registerPlugin(TextPlugin, MotionPathPlugin)

export function createTimeline() {
   return gsap.timeline({
      // delay: 0.2,
      paused: false, // default is false
      repeat: 1, // number of repeats (-1 for infinite)
      // repeatDelay: 1, // seconds between repeats
      // repeatRefresh: true, // invalidates on each repeat
      yoyo: false, // if true > A-B-B-A, if false > A-B-A-B
      defaults: {
         // children inherit these defaults
         //  duration: 0.6
      },
      smoothChildTiming: true,
      autoRemoveChildren: true,
      onComplete: () => {
         //  this.kill()
      },
      // other callbacks:
      // onStart, onUpdate, onRepeat, onReverseComplete
      // Each callback has a params property as well
      // i.e. onUpdateParams (Array)
   })
}

/* @params tl and elements - Take timeline object and array of element selectors in the order you want to animate them. 
Please note: this is basically boilerplate to reuse in future applications and keep it modular inside React. You have to tailor it to your specific use case and add any necessary gsap code here.*/
export function editIntro(tl, elements) {
   tl.from(elements[0], {ease: 'sine.inOut', y: '200%', opacity: 0, delay: 0.3, duration: 2})
      .from(elements[1], {
         ease: 'sine.inOut',
         x: '-200%',
         opacity: 0,
         delay: 0.3,
         duration: 0.5,
      })
      .from(elements[2], {
         ease: 'none',
         text: {
            value: '                    ',
         },
         delay: 0.4,
         duration: 1,
      })
      .from(elements[3], {opacity: 0, duration: 1, y: '-1000%', rotateY: '360deg', skewX: '150deg'})
      .from(elements[4], {y: '-500%', duration: 1.5, scaleY: '5'})
      .from(elements[5], {ease: 'elastic', duration: 1, delay: 0.4, y: '200%'})
      .from(elements[6], {opacity: 0, duration: 1, rotate: '900deg'})

   //   .from(elements[1], {filter: 'hue-rotate(300deg)', duration: 2.5, repeat: -1, yoyo: true})
}
