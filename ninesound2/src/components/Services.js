import React from 'react'

import './ServicesStyles.css'

import Remote from '../assets/post-production-audio.jpg'
import Cat from '../assets/cat.jpg'


const Services = () => {
  return (
    <div className='services'>
        <div className='card-container'>
          <div className='card'>
        <h3>-Mixing-</h3>
        <p className='texto'>Mixing your track, we perform a multitude of specific operations with the components to create a unique sound of a perfectly balanced musical piece. We work with frequency content, boosting, panning, etc. At certain time frames, and for the whole track, we apply the needed filters, effects, delays, work with frequencies, and do much more.</p>
        <p className='cardprice'><strong>From 95€</strong></p>
        </div>
        <div className='card'>
        <h3>-Mastering-</h3>
        <p className='texto'>Whereas mixing is done to unite all the stems into a cohesive stereo track, mastering gives the final touch to your music. At our online mixing and mastering services, we apply the parameters required by the streaming platforms and perform other improvements to make your music perfect and ready for release.</p>
        <p className='cardprice'><strong>From 50€</strong></p>
        </div>
        <div className='card'>
        <h3>-Complete Mixing and Mastering-</h3>
        <p className='texto'>If you need us to do both mixing and mastering, then grab the best offer! We will do mixing, let you check the result, and then we will master the track. Whatever platform you have chosen for release, Spotify, iTunes, or others, we will apply all the requirements and make sure your audience gets the best experience from your music.</p>
        <p className='cardprice'><strong>From 99€</strong></p>
        </div>
        <div className='card'>
        <h3>-Upgrade Mixing and Mastering-</h3>
        <p className='texto'>Need more time and consultations, more work on the details and questionable points in your recordings, and more use of analog equipment to achieve even better quality? Then Upgrade service is for you! The best members of our team will guide you through the recording and then work on your music using analog equipment.</p>
        <p className='cardprice'><strong>From 290€</strong></p>
        </div>
        <div className='card'>
        <h3>-Beat Mixing-</h3>
        <p className='texto'>Beat mixing service is created especially for producers and beatmakers. We will make your music sound top-chart from the first seconds, and perfectly fit for adding vocals. Want artists to choose your music, and later to come back and purchase more? Then trust us and let us mix your beats professionally.</p>
        <p className='cardprice'><strong>From 95€</strong></p>
        </div>
        <div className='card'>
        <h3>-Dolby Atmos Mixing and Mastering-</h3>
        <p className='texto'>Sound engineer uses a completely different approach than the one applied for mixing stereo files. Dolby Atmos is an object-based sound system, and the engineer can put every instrument and sound in a virtual 3D space around the listener.</p>
        <p className='cardprice'><strong>From 370€</strong></p>
        </div>
        <div className='card'>
        <h3>-Stem Mastering-</h3>
        <p className='texto'>Stem mastering provides greater abilities to the mastering engineer to fix various mistakes and improve the overall sound by utilizing pre-rendered buses for drums, bass, vocals and accompanying instruments.</p>
        <p className='cardprice'><strong>From 100€</strong></p>
        </div>
        <div className='card'>
        <h3>-Manual vocal Editing-</h3>
        <p className='texto'>Manual Vocal Editing is pitch correction using a combination of Melodyne, Autotune, VariAudio, ReVoicePro, Waves Tune to create soft-sounding vocals with perfect pitch.</p>
        <p className='cardprice'><strong>From 58€</strong></p>
        </div>
        <div className='card'>
        <h3>-Music Editing-</h3>
        <p className='texto'>Music Editing is replacing audio samples (kick, snare, bass, vocals, etc) to increase the overall quality of sound. Also we are performing time alignment of instruments such as guitars and drums.</p>
        <p className='cardprice'><strong>From 51€</strong></p>
        </div>
        </div>
       
         
       
        
<div className='right'>
  <div className='img-container'>
    <div className='image-stack top'>
      <img src={Cat} className='img' alt='' />
    </div>
    <div className='image-stack bottom'>
      <img src={Remote} className='img' alt='' />
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default Services