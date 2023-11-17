import React from 'react'
import logo from '../assests/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light px-5 mb-5'>
        <div class='container-fluid'>
          <img src={logo} alt='' height={40} width={40} />
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul class='navbar-nav ms-auto'>
              <li class='nav-item'>
                <Link class='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' to='menu'>
                  Menu
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' to='about'>
                  About Us
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' to='contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
