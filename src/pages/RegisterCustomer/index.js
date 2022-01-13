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
    const [password, setPassword] = useState('')
    const [roles] = useState('customer')
    const history = useHistory();

    const Register = async (e) => {
      e.preventDefault()
      const body = new URLSearchParams();
      body.append("name", name);
      body.append('email', email);
      body.append('password', password);
      body.append('roles', roles);
      axios({
          method: "POST",
          url: `${process.env.REACT_APP_API}/users/add`,
          data: body,
          headers: { 'Content-type': 'application/x-www-form-urlencoded', }
      }).then((res) => {
          history.push('/login-cust');
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
              <button className="button-cust">Customer</button>
            </Link>
            <Link to = "/regist-seller">
              <button className="button-seller">Seller</button>
            </Link>
            </div>
            <form action className="form-login">
              <input onChange={inputName} type="text" className="form-input" placeholder="Name" required/>
              <input onChange={inputEmail} type="email" className="form-input" placeholder="Email" required/>
              <input onChange={inputPassword} type="password" className="form-input" placeholder="Password" required/>
              <p className="forgot-pass">
                <a href>Forgot password?</a>
              </p>
              <button onClick={Register} className="form-input primary">
                <a className="link" href> Signup </a>
              </button>
            </form>
            <p className="nohave-acc">
              Already have a Tokopedia account?
              <Link to="/login-cust">Login</Link>
            </p>
          </div>
        );
    
} 
    
export default App