import React from 'react'
import {Viewer} from '@react-pdf-viewer/core'
import myResume from '../assets/Leonid_Yanchis2020-v2.pdf'
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function ResumePDF() {
   const defaultLayoutPluginInstance = defaultLayoutPlugin()
   //    const pdf = myPdf
   return (
      <div
         id='resume-pdf'
         style={{
            width: '100%',
            height: '100%',
            display: 'initial',
            position: 'fixed',
            overflowY: 'auto',
            border: '4px ridge blue',
         }}>
         <Viewer fileUrl={myResume} plugins={[defaultLayoutPluginInstance]} />
      </div>
   )
}
