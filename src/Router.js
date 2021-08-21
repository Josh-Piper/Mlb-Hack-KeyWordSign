import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GetFirebase from './Components/GetFirebase'
import UploadFirebase from './Components/UploadFirebase'
import About from './Components/About'
import Translate from './Components/Translate'
import Navi from './Components/Navi'

const MyRouter = () => {
  return (
    <Router>
      <Navi />
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route path='/upload'>
          <UploadFirebase />
        </Route>
        <Route path='/signs'>
          <GetFirebase />
        </Route>
        <Route path='/translate'>
          <Translate />
        </Route>
      </Switch>
    </Router>
  )
}

export default MyRouter
