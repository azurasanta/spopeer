import React from 'react'
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/d3a7ea3eae38852ccc3740090e25f214.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return(
  <div>
 <nav className='nav'>
  <div className='logo'>
   <img src = {logo}  className='logo'/>
  </div>
  <div className='toggle'>
    <FontAwesomeIcon icon={faBars} className='toggle'/>
  </div>
 <ul className='menu'>
 <Link to = "/" className='link'>Athletes</Link>
 <Link to = "/FAQ" className='link'>Coaches</Link>
 <Link to = "/About" className='link'>Sports Clubs</Link>
 <Link to = "/sports" className='link'>Supportive Professionals</Link>
 </ul>
 <ul className='menu2'>
 <Link to = "" className='link'>Login</Link>
 <Link to = "">
 <button className='link2'
 >Get Started</button>
 </Link>
 </ul>
  
 </nav>
  </div>
  )
}

export default Nav;