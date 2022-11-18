import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/Services'
import Footer from '../components/Footer'

function Services() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='SERVICES.' text='We offer proffessional audio mixing, mastering and editing.' />
        <ServicesSection />
        <Footer />
    </div>
  );
}

export default Services