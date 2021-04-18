import React, { useRef } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const upRef = useRef()
  return (
    <>
      <Navbar upRef={upRef} />
      {children}
      <Footer upRef={upRef} />
    </>
  )
}

export default Layout
