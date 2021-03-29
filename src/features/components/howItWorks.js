import React from 'react'

const HowItWorks = () => {
    return (
        <div className='container-fluid bg-white'>
            <div className="container p-5 text-sm-start">
                <div className="row">
                    <div className="col-md-8 p-3">
                        <h3 className="text-capitalize">How it works</h3>
                        <p>register to our platform as an investor, choose one of our plan that fits your Finances,
                            deposit the required amount using our system, and then wait the required time, a minimum of 72 hours.
                            comfirm your balance and make withdrawals if necessary.
                        </p>
                        <p>Earn even more when you refer a friend or a colleagues, simply look to the referral page for your unique 
                            referral code and distribute to friends so that on successful registration, you earn a 10% of their total earnings.
                        </p>
                        <button className="btn btn-info fs-5">Get started</button>
                    </div>
                    <div className="col-md-4 p-3">
                        {/* <h4 className='text-center'>Contact Us</h4> */}
                        <span className='text-capitalize fw-bold'>having questions that needs clarification, send us a message</span>
                        <div className="py-md-3">
                            <input type="text" placeholder="Full Name" className="form-control mb-3" />
                            <textarea placeholder="Message" row='10' className='form-control mb-3' ></textarea>
                            <button className='btn btn-info'>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
