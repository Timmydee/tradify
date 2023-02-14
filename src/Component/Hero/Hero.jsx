import React from 'react'
import './Hero.css'
import Crypto from '../../asset/heroImg.png'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.2 }}
            className="container"
        >
            <div className='left'>
                <p>Buy & Sell Crypto 24/7 from top brands you can Trust</p>
                <h1>Trade with <span className='secondary'>Trust</span> </h1>
                <p>Buy and sell your Cryptocurrencies</p>

                <div className='input-container'>
                    <input type="email" placeholder='Enter your email'/>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        
        
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt='img'></img>
                </div>
            </div>

        </motion.div>
    </div>
  )
}

export default Hero