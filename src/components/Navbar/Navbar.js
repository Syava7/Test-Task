import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className='navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>
          Logo
        </Link>      
        <NavLink to='/home' className='nav-link'>
          Home
        </NavLink>     
        <NavLink to='/posts' className='nav-link'>
          Users
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
