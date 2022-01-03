import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import './index.scoped.css'
import { Link } from "react-router-dom"
import './index.scoped.css'
import logo from '../../assets/Logo.svg'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionUsers from "../../redux/actions/users"


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            roles: "customer"
        }
    }

    getData = (token) => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/users/${this.state.email}`,
            headers: {
                tokenauth: token,
            },
        })
            .then((res) => {
                this.props.UserSet(res.data.result[0])
                this.props.history.push("/") 
            })
            .catch((error) => {
                console.log(error)
            })
    }

    SubmitHandler = async () => {
        try {
            const body = new URLSearchParams();
            body.set('email', this.state.email);
            body.set('password', this.state.password);
            const res = await axios.post(`${process.env.REACT_APP_API}/auth/customer`, body, { 'Content-type': 'application/x-www-form-urlencoded', });
            console.log(res)
            const {token} = res.data.result[0]
            console.log(token)
            this.props.AuthSet(token)
            this.getData(token)
        } catch (error) {
            console.error(error);
        }
    }
    ChangeEmail = (e) => {
      this.setState({ email: e.target.value })
    }
    
    ChangePassword = (e) => {
      this.setState({ password: e.target.value })
    }
    
    render() {
        return (
          <div className="container">
            <div className="logo">
            <Link to="/">
              <img src={logo} alt={logo} /><span>Blanja</span>
            </Link>
            </div>
            <p className="text-login">Please login with your account</p>
            <div className="button-group">
            <Link to = "/login-cust">
              <button className="button-cust">Customer</button>
            </Link>
            <Link to = "/login-seller">
              <button className="button-seller">Seller</button>
            </Link>
            </div>
            <form action className="form-login">
              <input onChange={this.ChangeEmail} type="email" className="form-input" placeholder="Email" required />
              <input onChange={this.ChangePassword} type="password" className="form-input" placeholder="Password" required />
              <p className="forgot-pass">
                <a href>Forgot password?</a>
              </p>
              <button onClick={this.SubmitHandler} className="form-input primary">
                <a className="link" href> PRIMARY </a>
              </button>
            </form>
            <p className="nohave-acc">
              Don't have a Tokopedia account?
              <Link to="/regist-cust">Register</Link>
            </p>
          </div>
        );
    }  
} 

function mapStateToProps(state)  {
    return {
        users: state.users,
    }
}
    
function mapDispatchToProps(dispatch) {
    return {
        AuthSet: bindActionCreators(ActionUsers.AuthSet, dispatch),
        UserSet: bindActionCreators(ActionUsers.UserSet, dispatch)
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Login)