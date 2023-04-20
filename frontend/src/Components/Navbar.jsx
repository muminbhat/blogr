import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<div className="container">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark ">
    <Link to
      = {'/'}
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="/" />
      </svg>
      <span className="logo fs-4 text-white">BLOGR</span>
    </Link>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="/" className="nav-link" aria-current="page">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          About
        </a>
      </li>
    </ul>
  </header>
</div>

    </>
  )
}

export default Navbar