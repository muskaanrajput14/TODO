import React from 'react'
import './Footer.css'
const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    border: "4px solid red"
  }
  return (
    <footer className='bg-dark text-light'
    style = {footerStyle}>
    <p className="text-center">
      Copyright &copy; MyTodosList.com
    </p>
    </footer>
  )
}

export default Footer
