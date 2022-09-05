import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <div className='nav-items'>
      <Link to="/women" className="nav-item">WOMEN</Link>
      <Link to="/men" className="nav-item">MEN</Link>
      <Link to="/outlet" className="nav-item">OUTLET</Link>
      <span class="nav-item">|</span>
      <Link to="/shinwonmall" className="nav-item">신원관</Link>
      <Link to="/planevent" className="nav-item">기획전</Link>
      <Link to="/event" className="nav-item">이벤트</Link>
      <Link to="/brand" className="nav-item">브랜드</Link>
      <Link to="/best" className="nav-item">베스트</Link>


      </div>
    </div>
  )
}

export default Nav