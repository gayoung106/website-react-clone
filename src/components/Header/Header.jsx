import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className='header-wrapper'>

        <Link to='/' className='header-logo'>
          <img className='logo' src="img/logo.png" />
        </Link>
      <div className='header-items'>
        <span className="header-item">SEARCH</span>  
        <Link to="/join" className="header-item">JOIN</Link>
        <Link to="/login" className="header-item">LOGIN</Link>
        <Link to="/cart" className="header-item">SHOPPING BAG</Link>
      </div>




    </div>
  )
}

export default Header