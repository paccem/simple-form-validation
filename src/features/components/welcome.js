import React from 'react'

const Welcome = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="ms-md-auto col-md-6 text-white py-5 px-2 py-md-5 text-sm-start my-sm-5">
                    <h2 className='text-uppercase text-info fs-sm-1 fw-bold'>Invest with us, earn while you sleep</h2>
                    <span className='text-capitalize fst-italic'>earnings have never beeen easier, our traders are on board to ensure your returns. Find your best deals.</span>
                    <div className="py-md-4 py-3">
                        <button className="btn btn-info text-white rounded fs-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
