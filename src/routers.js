import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home/home'
import LoginCust from './pages/LoginCustomer/index'
import LoginSeller from './pages/LoginSeller/index'
import RegistCust from './pages/RegisterCustomer/index'
import RegistSeller from './pages/RegisterSeller/index'
import Product from './pages/AuthHome/home'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login-cust" component={LoginCust}></Route>
                <Route exact path="/login-seller" component={LoginSeller}></Route>
                <Route exact path="/regist-cust" component={RegistCust}></Route>
                <Route exact path="/regist-seller" component={RegistSeller}></Route>
                <Route exact path="/product" component={Product}></Route> 
                {/* <Route exact path="/home/profile/myproduct" component={ProfileMyProduct}></Route>
                <Route exact path="/home/profile/myorder" component={ProfileMyOrder}></Route>
                <Route exact path="/home/profile/add" component={ProfileAdd}></Route>
                <Route exact path="/home/bag" component={Bag}></Route>
                <Route exact path="/login-seller" component={LoginSeller}></Route>
                <Route exact path="/home/p/:id_product" component={DetailUser}></Route>
                <Route exact path="/p/:id_product" component={DetailPublic}></Route>
                <Route exact path="/home" component={HomeUser}></Route>
                <Route exact path="/" component={HomePublic}></Route> */}
            </Switch>
        </BrowserRouter>
    )
}

export default App