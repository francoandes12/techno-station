import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand'>Techno Station</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link href='/tracks'>
                <a className='nav-link active' aria-current='page'>
                  Tracks
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/sets'>
                <a className='nav-link active' aria-current='page'>
                  Sets
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/listas'>
                <a className='nav-link active' aria-current='page'>
                  Listas
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/about'>
                <a className='nav-link active' aria-current='page'>
                  About
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/contacto'>
                <a className='nav-link active' aria-current='page'>
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
