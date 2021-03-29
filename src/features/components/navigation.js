import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './navbar'
import Routes from '../pages/routes'

const Navigation = () => {
    return (
        <Router>
            <Navbar />
            <Routes />
        </Router> 
    )
}

export default Navigation;


