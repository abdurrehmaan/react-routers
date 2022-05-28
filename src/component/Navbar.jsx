import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>

        <div className="logo">logo</div>
        <ul className="menu">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
           
          
        </ul>
    </div>
  )
}

export default Navbar