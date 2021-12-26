import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import search from '../../assets/Search.svg'
import './Navbar2.scoped.css'

const Navbar2 = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link to='/' className="navbar-brand" href="/">
          <img src={logo} alt={logo} /><span> Blanja</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex flex-row align-items-center">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <img className="search" src={search} alt={search} />
            <span><Link to='/' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z" fill="white" stroke="#8E8E93" />
                  <path d="M29.3332 13.5H12.6665L19.3332 21.3833V26.8333L22.6665 28.5V21.3833L29.3332 13.5Z" stroke="#8E8E93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link></span>
          </form>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around">
            <li><Link to='/' className="cart" href="../cart/cart.html">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#9B9B9B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#9B9B9B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#9B9B9B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link></li>
            <li className="nav-item">
              <Link to='/login-cust' className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/regist-cust' className="nav-link" href="../auth/Register/register.html">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }

export default Navbar2