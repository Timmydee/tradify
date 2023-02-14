import React, {useState, useEffect} from 'react'
import './Feature.css'
import {FiArrowDown, FiArrowUp} from 'react-icons/fi'
import {motion} from 'framer-motion'

// import Btc from '../../asset/btc-img.png'
import axios from 'axios'

const Feature = () => {
    const [api, setApi] = useState('')

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"

    useEffect(()=> {
        axios.get(url)
            .then((response) => {
            setApi(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(api)
    if(!api) return null
    
    return (
        <div className='feature'>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                className="container"
            >
                <div className='left'>
                    <h2>Explore top Crypto Like Bitcoin, Etherium, and DogeCoin</h2>
                    <p>See all available assest Crptocurrencies and NFT's</p>
                    <button className='btn'>See more coins</button>
                </div>

                <div className='right'>
                    {/* <div className='top' > */}
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 100]}}
                        transition = {{ duration: 1.2 }}
                        className="top"
                    >
                        {api.map((each, i) => (
                            < div className="coin" key={i}>
                                <img src={each.image} alt="/" />
                                

                                <div>
                                    <h5>{each.name}</h5>
                                    <p>${each.current_price}</p>

                                </div>

                                {each.price_change_percentage_24h < 0 ? 
                                    (
                                        <span className='red'>
                                            <FiArrowDown/>
                                            {each.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                        
                                    ) : 
                                    (
                                        <span className='green'>
                                            <FiArrowUp/>
                                            {each.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                        
                                    )
                                }
                            </div>
                        ))}
                        
                    </motion.div>
                    
                </div>
            </motion.div>
        
        </div>
    )
}

export default Feature