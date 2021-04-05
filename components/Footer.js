import React from 'react'
import NextLogo from '../public/next-logo.svg'
const Footer = () => {
  return (
    <div className='bg-white text-dark mt-2 p-3'>
      <div className='row text-center'>
        <div className='col-12 col-md-4'>
          <p>Creado por Franco Ibarra y Facundo Petri.</p>
        </div>
        <div className='col-12 col-md-4'>
          <p>Córdoba,Argentina.2021</p>
        </div>
        <div className='col-12 col-md-4 d-flex justify-content-center'>
          <p className='me-2'>Made with Nextjs</p>
          <div>
            <NextLogo width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
