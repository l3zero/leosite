import React, {Component} from 'react'

export default function Photo() {
   return (
      <React.Fragment>
         <div id='photo-section' style={{gridArea: 'my-photo'}}>
            <div>Leonid Yanchis</div>
            <div>Software Engineer</div>
            <a
               href='/Leonid_Yanchis2020.pdf'
               target='_blank'
               type='application/pdf'
               download
               referrerPolicy='no-referrer'>
               <img id='resume' src='/download.svg' style={{width: '20px', height: '20px'}} />
            </a>

            <img
               id='my-photo'
               src='/Main-Leo-Job-Photo-2.jpg'
               alt='Leonid-Yanchis-Photo'
               style={{width: '200px', height: '200px'}}
            />
         </div>
      </React.Fragment>
   )
}
