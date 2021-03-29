import React from 'react'

const About = () => {
    return (
        <div className='container-fluid bg-light'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8 text-md-start">
                        <h4 className='text-info text-capitalize fw-bold fs-3'>patches is a new initiative, of the canadian steel co-operation</h4>
                        <p>The idea was born to enable people all around the world invest in steel on the stock market,
                            our pricing and plans are suited to various individual background, no prior knowlegde of trading is needed
                            as our professional traders ensure your returns are met. 
                        </p>
                        <p>earn even more when you refer a client to patches</p>
                        <button className='btn btn-info fs-5'>Get started</button>
                    </div>
                    <div className="col-md-4 d-none d-sm-block">
                        <img src="../../assets/eiffel-tower-307022_960_720.png" className='img-fluid' alt="tower"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
