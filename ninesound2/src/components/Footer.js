import React from 'react'
import './FooterStyles.css'
import { useState } from 'react';
import Map from './Map';
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaInstagram } from 'react-icons/fa'


function Footer() {
    const [coordinaates, setCoordinates] = useState({lngLat: [59.4261146, 24.7696256], zoom: 11});
    return (
         <div className='footer'>
        <div className= 'footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                    <div>
                    <p>Filtri tee 6</p>
                <h4>Tallinn,Estonia</h4>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }}/> +37257704460</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }}/> meosriina@gmail.com</h4>
            </div>
            </div>
            <div className='right'>
<h4>You can easily find NineSound OÜ here: </h4>
<p>We are situated near city central bus station</p>
<div className='map'>
<div onClick={() => setCoordinates({lngLat: [59.4261146, 24.7696256], zoom: 13})} ></div>
    <Map mapCoordinaates={coordinaates}  />
    </div>
<div className='social'>
    <FaFacebook size={50} style={{ color: '#ffffff', margin: '2rem' }}/> 
    <FaTwitter size={50} style={{ color: '#ffffff', margin: '2rem' }}/> 
    <FaLinkedin size={50} style={{ color: '#ffffff', margin: '2rem' }}/> 
    <FaInstagram size={50} style={{ color: '#ffffff', margin: '2rem' }}/>
</div>
</div>
    </div>
    </div>
     
     );
}

export default Footer;