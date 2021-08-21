import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Translate from './Components/Translate'
import GetFirebase from './Components/Firebase/GetFirebase'
import UploadFirebase from './Components/Firebase/UploadFirebase'
import Navi from './Components/Navi/Navi'
import About from './Components/About/About'

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
