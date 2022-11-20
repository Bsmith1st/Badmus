import React from 'react'
import Logo1 from './Assets Folder/Group 68.svg'
import Logo2 from './Assets Folder/Group 69.svg'
import './Footer1.css'

function Footer1() {
  return (
    <div className='footer-h'>
        <p> Ready to trade Buy/Sell Cryptocurrencies in just 10 min</p>
        <h4> Create your account for free and start trading today!</h4>
         <div>
            <button className='get'> Get Started</button>
         </div>
         <div>
            <img  className='sr' src={Logo1} alt="" />
            <img className='sr'  src={Logo2} alt="" />
         </div>


    </div>
  )
}

export default Footer1