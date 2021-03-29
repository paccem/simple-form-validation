import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/style.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">Patches</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="nav navbar-nav ms-auto mb-2 mb-lg-0">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Signup">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
