import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
      <p>The service you choose, the size of your project, amount of tracks, and amount of add-ons will determine our mixing mastering rates per song.

To get an idea of how much we charge for services without add-ons, look at these approximate numbers:</p>
        <div className='card-container'>
        <div className='card'>

                <h3>-Analog Mixing and Mastering-</h3>
                <p className='btc'>41-520€</p>
                <p>You can order high-quality mixing or mastering separately for the best mixing and mastering prices</p>
                <Link to='/contact' className='btn'>PACKAGE I</Link>
            </div>
            <div className='card'>
                <h3>-Complete Mixing and Mastering-</h3>
                <p className='btc'>96-195€</p>
                <p>If you need both mixing and mastering, this is the best deal! For small or big projects we offer the highest quality of service for the perfect master price. How much does it cost to master a song? Check using our order page.</p>
                <Link to='/contact' className='btn'>PACKAGE II</Link>
            </div>
            <div className='card'>
                <h3>-Mastering for Dolby Atmos-</h3>
                <p className='btc'>270-520€</p>
                <p>If you want analog mixing and mastering, this is the service for you. It will also suit big commercial projects. However, regardless of the project range, if you need your song or album to get the most attention from us and you could use our consulting, choose this option. Calculate our mixing and mastering prices per song on the order page.</p>
                <Link to='/contact' className='btn'>PACKAGE III</Link>
                
            </div>
        </div>
    </div>
    
  )
}

export default Pricing