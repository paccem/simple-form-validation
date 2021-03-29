import React from 'react'
import {Carousel} from '3d-react-carousal';
import '../../styles/style.css'

const WhyChoose = () => {
    const slides = [
        <div className='card rounded shadow p-md-5 bg-blue p-3 w-100'>
            <i className='fab fa-cc-mastercard text-info fa-5x py-md-3' aria-hidden="true"></i>
            <h5 className='img-caption text-capitalize p-2'>ease of use</h5>
            <p className=''>You never have to leave the comfort of your home,
                simply credit you account using our card deposit system.</p>
        </div>,
        <div className='card rounded shadow p-md-5 bg-blue p-3'>
            <i className='fa fa-hand-holding-usd text-info fa-5x py-md-3'></i>
            <h5 className='img-caption text-capitalize p-2'>value on investment</h5>
            <p className=''>We offer the best return on invested amount,
                 giving you the best value for your money over time</p>
        </div> ,
        <div className='card rounded shadow p-md-5 bg-blue p-3'>
            <i className='fas fa-hourglass-half text-info fa-5x py-md-3'></i>
            <h5 className='img-caption text-capitalize p-2'>Time-Less</h5>
            <p className=''>Less time required to get the minimum on your invested amount,
                a minimum of 72hour to achieve profit based on your choosen plan</p>
        </div>,
        <div className='card rounded shadow p-md-5 bg-blue p-3'>
            <i className='fa fa-wallet text-info fa-5x py-md-3'></i>
            <h5 className='img-caption text-capitalize p-2'>Effortless Withdrawals</h5>
            <p className=''>In our efforts to make investment easy for our client, Our Withdrawals
                are design to put your money right were you want, from the comfort of your home.</p>
        </div> ,
        <div className='card rounded shadow p-md-5 bg-blue p-3'>
            <i className='fa fa-comments-dollar text-info fa-5x py-md-3'></i>
            <h5 className='img-caption text-capitalize p-2'>refer to earn</h5>
            <p className=''>As we are dedicated to helping you earn more, we offer a 10% of your 
                referral total earnings, tell a friend and earn more.</p>
        </div>  ];

    return (
        <div className='container-fluid bg-light' id='why'>
            <h3 className='text-capitalize fw-bold text-info'>why choose Patches?</h3>
            <span className='fs-6'>Our unbeatable pricing and earnings on investment is the best out there when it comes to steel.</span>
            <div className="py-5 text-white">
                <Carousel slides={slides} autoplay={true} interval={5000} controls={false} />
            </div>
        </div>
    )
}

export default WhyChoose

