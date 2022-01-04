import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import './index.scoped.css'
import { Link } from "react-router-dom"
import logo from '../../assets/Logo.svg'
import { useHistory } from 'react-router-dom';

const App = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [store, setStore] = useState('')
    const [password, setPassword] = useState('')
    const [roles] = useState('seller')
    const history = useHistory();
  
    const Register = async (e) => {
      e.preventDefault()
      const body = new URLSearchParams();
      body.append("name", name);
      body.append('email', email);
      body.append('phone', phone);
      body.append('store', store);
      body.append('password', password);
      body.append('roles', roles);
      axios({
          method: "POST",
          url: `${process.env.REACT_APP_API}/sellers/add`,
          data: body,
          headers: { 'Content-type': 'application/x-www-form-urlencoded', }
      }).then((res) => {
          history.push('/login-seller');
          console.log(res)
      }).catch((err) => {
          console.log(err)
      })
    }
  
  const inputName = (e) => {
      setName(e.target.value)
  }
  
  const inputEmail = (e) => {
      setEmail(e.target.value)
  }

  const inputPhone = (e) => {
    setPhone(e.target.value)
}

  const inputStore = (e) => {
    setStore(e.target.value)
  }
  
  const inputPassword = (e) => {
      setPassword(e.target.value)
  }
    
      return (
          <div className="container">
            <div className="logo">
            <Link to="/">
              <img src={logo} alt={logo} /><span>Blanja</span>
            </Link>
            </div>
            <p className="text-login">Please signup with your account</p>
            <div className="button-group">
            <Link to = "/regist-cust">
              <button className="button-seller">Customer</button>
            </Link>
            <Link to = "/regist-seller">
              <button className="button-cust">Seller</button>
            </Link>
            </div>
            <form action className="form-login">
              <input onChange={inputName} type="text" className="form-input" placeholder="Name" required/>
              <input onChange={inputEmail} type="email" className="form-input" placeholder="Email" required/>
              <input onChange={inputPhone} type="tel" className="form-input" placeholder="Phone Number" required/>
              <input onChange={inputStore} type="text" className="form-input" placeholder="Store Name" required/>
              <input onChange={inputPassword} type="password" className="form-input" placeholder="Password" required/>
              <p className="forgot-pass">
                <a href>Forgot password?</a>
              </p>
              <button onClick={Register} className="form-input primary">
                <a className="link" href> PRIMARY </a>
              </button>
            </form>
            <p className="nohave-acc">
              Already have a Tokopedia account?
              <Link to="/login-seller">Login</Link>
            </p>
          </div>
        );
} 
    
export default App