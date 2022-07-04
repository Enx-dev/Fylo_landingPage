import React from 'react'
import brandLogo from "../images/logo.svg"
const Navbar = () => {
  return (
    <nav id='Navbar' className='Navbar'>
      <img className='Navbar__logo' src={brandLogo} alt="Brand Logo" />
      <ul className='Navbar__links'>
        <li>Features</li>
        <li>Team</li>
        <li>Sign in</li>
      </ul>
    </nav>
  )
}

export default Navbar