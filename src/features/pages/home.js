import React from 'react'
import About from '../components/about'
import HowItWorks from '../components/howItWorks'
import Welcome from '../components/welcome'
import WhyChoose from '../components/whyChoose'

const Home = () => {
    return (
        <div>
            <Welcome />
            <About />
            <WhyChoose />
            <HowItWorks />
        </div>
    )
}

export default Home
