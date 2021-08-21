import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UploadFirebase from './Components/Firebase/UploadFirebase'
import GetFirebase from './Components/Firebase/GetFirebase'
import Translate from './Components/Translate/Translate'
import About from './Components/About/About'
import Navi from './Components/Navi/Navi'

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
