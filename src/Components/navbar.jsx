import React from 'react'
import navImg from '../Images/ttt logo.png'
import './navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li><a href="/"><img className='logo' src={navImg} alt="" /></a></li>
            <li><a href="/"><button>Courses</button></a></li>
        </ul>
    </div>
  )
}

export default Navbar
