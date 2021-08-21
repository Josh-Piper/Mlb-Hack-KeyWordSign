import { Link } from 'react-router-dom'

function Navi () {
  return (
    <ul>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/signs'>Signs</Link></li>
      <li><Link to='/translate'>Translate</Link></li>
      <li><Link to='/upload'>Upload</Link></li>
    </ul>
  )
}

export default Navi
