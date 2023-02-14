import React from 'react'
import './SignUp.css'
import {motion} from 'framer-motion'

import Crypto from '../../asset/trade.png'

const SignUp = () => {
    return (
        <div className='signup'>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                className="container"
            >
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 100]}}
                    transition = {{ duration: 1.2 }}
                    className="right"
                >
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default SignUp