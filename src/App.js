import React, { Fragment } from 'react'
import GetFirebase from './Components/GetFirebase'
import UploadFirebase from './Components/UploadFirebase'

function App () {
  const get = false
  return <>{get ? <GetFirebase /> : <UploadFirebase />}</>
}

export default App
