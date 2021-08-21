import React, { Fragment } from "react";
import GetFirebase from "./Components/GetFirebase";
import UploadFirebase from "./Components/UploadFirebase"

function App() {
  const get = true;
  return <Fragment>{get ? <GetFirebase/> :<UploadFirebase />}</Fragment>
}

export default App;
