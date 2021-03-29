import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './home'
import Login from './Login'
import Signup from './Signup'

const Routes = () => {
    return (
        <Switch>
           <Route exact path='/' component={Home} /> 
           <Route path='/SignUp' component={Signup} /> 
           <Route path='/Login' component={Login} /> 
        </Switch>
    )
}

export default Routes
