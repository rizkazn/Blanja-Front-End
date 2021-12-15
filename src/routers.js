import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home/home'
import Login from './pages/Login/index'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                {/* <Route exact path="/" component={Aside}></Route> */}
                {/* <Route exact path="/home/profile/myproduct" component={ProfileMyProduct}></Route>
                <Route exact path="/home/profile/myorder" component={ProfileMyOrder}></Route>
                <Route exact path="/home/profile/add" component={ProfileAdd}></Route>
                <Route exact path="/home/bag" component={Bag}></Route>
                <Route exact path="/login-cust" component={LoginCust}></Route>
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