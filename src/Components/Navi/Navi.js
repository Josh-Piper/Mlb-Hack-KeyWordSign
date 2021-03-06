import { Link } from 'react-router-dom'
import './_Navi.scss'

const Navi = () => {
  return (
    <nav className='navi'>
      <div className='container'>
        <span className='navi__logo'>
          Keyword Sign AAC
        </span>
        <ul className='navi__menu'>
          <li className='navi__menu__item'><Link to='/'>About</Link></li>
          <li className='navi__menu__item'><Link to='/signs'>Signs</Link></li>
          <li className='navi__menu__item'><Link to='/translate'>Translate</Link></li>
          <li className='navi__menu__item'><Link to='/upload'>Upload</Link></li>
          <li className='navi__menu__item'><a href="https://key-word-sign-api.herokuapp.com/keywords">API</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navi
