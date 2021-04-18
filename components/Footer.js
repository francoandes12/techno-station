import React from 'react'
import NextLogo from '../public/next-logo.svg'
const Footer = ({ upRef }) => {
  function handleBackClick() {
    upRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='bg-white text-dark mt-2 p-3'>
      <div className='row text-center'>
        <div className='col-12 col-md-3'>
          <p>Creado por Franco Ibarra y Facundo Petri.</p>
        </div>
        <div className='col-12 col-md-3'>
          <p>Córdoba,Argentina.2021</p>
        </div>
        <div className='col-12 col-md-3 d-flex justify-content-center'>
          <p className='me-2'>Made with Nextjs</p>
          <div>
            <NextLogo width={24} height={24} />
          </div>
        </div>
        <div className='col-12 col-md-3'>
          <button onClick={handleBackClick}>
            <i className='fas fa-chevron-up'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
