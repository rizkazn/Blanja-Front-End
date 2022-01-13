import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../assets/Logo.svg'
import search from '../../assets/Search.svg'
import profile from '../../assets/christian-buehner.svg'
import "./Navbar.scoped.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const Navbar1 = () => {
  let history = useHistory();
  const [handleChange, sethandleChange] = useState('')
  const Search = (e) => {
    e.preventDefault()
    history.push(`/search/${handleChange}`)
  }
    return(
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link to='/' className="navbar-brand" href="/">
            <img src={logo} alt={logo} /><span> Blanja</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex flex-row align-items-center" action onSubmit={Search}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onkeypress="handleKeyPress(event)" onChange={(e) => sethandleChange(e.target.value)} />
              <img className="search" src={search} alt={search} />
              <span><Link to='/' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z" fill="white" stroke="#8E8E93" />
                    <path d="M29.3332 13.5H12.6665L19.3332 21.3833V26.8333L22.6665 28.5V21.3833L29.3332 13.5Z" stroke="#8E8E93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg> 
                </Link></span>
            </form>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around">
              <li><Link to='/' className="cart" href><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <Link to='/' className="nav-link" href="#"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#9B9B9B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21" stroke="#9B9B9B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link" href="#"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#9B9B9B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="#9B9B9B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link" href>
                  <img className="profile" src={profile} alt={profile} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ) 
}

export default Navbar1