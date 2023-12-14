import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'
import customer_icon from '../Assets/customer_icon.png'
import karigar_icon from '../Assets/karigar_icon.png'

 const Hero = () => {
  return (
    <div className='hero-top'>

        <div className='hero-left'>
          <h1>A Smart way to <br/>
            find and provide <br/>
             work to Kaarigar<br/>
            near you</h1>
        </div>

        <div className='hero-right'>
            <img src={hero_image} alt="" width='700' height='450'  />
        </div>

         <button className="hero-customer-btn">
              Customer
              <img src={customer_icon} alt="" width='200' height='170' />
          </button>

             <button className="hero-karigar-btn">
              Kaarigar
              <img src={karigar_icon} alt="" width='200' height='150' />
             </button>
    </div>
  )
}

export default Hero