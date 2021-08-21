import { Link } from 'react-router-dom'

function Navi () {
  return (
    <ul>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/signs'>Signs</Link></li>
      <li>Translate</li>
      <li><Link to='/upload'>Upload</Link></li>
    </ul>
  )
}

export default Navi
