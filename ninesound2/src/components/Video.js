import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom'

import soundVideo from '../assets/2324293.mp4'


function Video() {
    return ( 
    <div className='hero'>
<video autoPlay loop muted id='video'>
    <source src={soundVideo} type='video/mp4' />
</video>
<div className='content'>
  <h1>Best quality</h1> 
  <p>S o u n d  M i x i n g</p> 
<div>
    <Link to='/contact' className='btn btn-light'>Ask more</Link>
</div>
</div>
    </div> );
}

export default Video;