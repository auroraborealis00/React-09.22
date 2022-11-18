import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'


function Pricing() {
    return ( 
    <div>
        <Navbar />
        <HeroImage heading='PRICING.' text='How much does it cost?'
 />
        <PricingCards />
        <Footer />
    </div> );
}

export default Pricing;
