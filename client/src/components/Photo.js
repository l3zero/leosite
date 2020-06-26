import React, {Component} from 'react'

export default function Photo() {
   return (
      <React.Fragment>
         <div id='photo-section' style={{gridArea: 'my-photo'}}>
            <div>Leonid Yanchis</div>
            <div>Software Engineer</div>
            <img id='resume' src={require('../img/download.svg')} />
            <img
               id='my-photo'
               src={require('../img/Main-Leo-Job-Photo-2.jpg')}
               alt='Leonid-Yanchis-Photo'
               style={{width: '200px', height: '200px'}}
            />
         </div>
      </React.Fragment>
   )
}
