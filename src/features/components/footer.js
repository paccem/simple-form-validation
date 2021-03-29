import React from 'react'
import '../../styles/style.css'

const Footer = () => {
    return (
        <div className='container-fluid footer text-white sticky-bottom'>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mt-5">
                            <h6>About</h6>
                            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>

                        <div className="col-xs-6 col-md-3 mt-5">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="/" className='nav-link text-white'>C</a></li>
                                <li><a href="/" className='nav-link text-white' >UI Design</a></li>
                                <li><a href="/" className='nav-link text-white'>PHP</a></li>
                                <li><a href="/" className='nav-link text-white'> Java</a></li>
                                <li><a href="/" className='nav-link text-white'>Android</a></li>
                                <li><a href="/" className='nav-link text-white'>Templates</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3 mt-5">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                            <li className='link-item'><a href="/"  className='nav-link text-white' >About Us</a></li>
                            <li><a href="/"  className='nav-link text-white' >Contact Us</a></li>
                            <li><a href="/"  className='nav-link text-white'>Contribute</a></li>
                            <li><a href="/"  className='nav-link text-white'>Privacy Policy</a></li>
                            <li><a href="/"  className='nav-link text-white'>Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12 mt-5">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                                <a href="/" className='nav-link text-white'>Scanfcode.</a>
                            </p>
                        </div>  
                        <div className="col-md-4 col-sm-6 col-xs-12 mt-5">
                            <ul className="social-icons">
                                <li><a className="facebook" href="/"><i className="fab fa-facebook"></i></a></li>
                                <li><a className="twitter" href="/"><i className="fab fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="/"><i className="fab fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="/"><i className="fab fa-linkedin"></i></a></li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;