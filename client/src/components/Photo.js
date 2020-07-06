import React, {Component} from 'react'
import '../styles/photoSection.css'

export default function Photo() {
   return (
      <React.Fragment>
         <div id='photo-section' style={{gridArea: 'my-photo'}}>
            <img id='my-photo' src='/leo-1.png' alt='Leonid-Yanchis' style={{width: '100%', height: 'auto'}} />

            <div>
               {/* <span>Leonid Yanchis</span>
               <span>Software Developer</span> */}
               <a
                  href='/Leonid_Yanchis2020.pdf'
                  target='_blank'
                  type='application/pdf'
                  download
                  referrerPolicy='no-referrer'>
                  <img id='resume' src='/download.svg' style={{width: '60%', height: 'auto'}} alt='' />
               </a>
            </div>
         </div>
      </React.Fragment>
   )
}
//filter: 'drop-shadow(-5px -5px 10px white)'
