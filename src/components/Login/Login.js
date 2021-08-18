import React from 'react'
import './Login.scoped.css'
import logo from '../../assets/Logo.svg'


const LoginCust = () => {
    return (
          <div className="container">
            <div className="logo">
              <img src={logo} alt={logo} /><span>Blanja</span>
            </div>
            <p className="text-login">Please login with your account</p>
            <div className="button-group">
              <button className="button-cust">Customer</button>
              <button className="button-seller">Seller</button>
            </div>
            <form action className="form-login">
              <input type="text" className="form-input" placeholder="Email" />
              <input type="text" className="form-input" placeholder="Password" />
              <p className="forgot-pass">
                <a href>Forgot password?</a>
              </p>
              <button className="form-input primary">
                <a className="link" href> PRIMARY </a>
              </button>
            </form>
            <p className="nohave-acc">
              Don't have a Tokopedia account?
              <a href className> Register</a>
            </p>
          </div>
    )
}  

export default LoginCust