import React from 'react'
import Pic4 from './Assets Folder/WhatsApp Image 2022-11-16 at 5.39.45 AM.jpeg'
import Pic5 from './Assets Folder/depositgirl.png'
import Pic6 from './Assets Folder/buy_sellgirl.png'
import Pic7 from './Assets Folder/emojione-monotone_keycap-1.png'
import Pic8 from './Assets Folder/emojione-monotone_keycap-2.png'
import Pic9 from './Assets Folder/emojione-monotone_keycap-3.png'
import './Card2.css'

function Card2() {
    return (
        <div className='parent-cont'>
            <h4> Buy and Sell your Cryptocurrency in 3 simple steps</h4>
            <div className='child'>
                <div className='num1'><img src={Pic7} alt="" /></div>
                <div className='c-cont1'>

                    <h5>Create a free Account</h5>
                    <p>Sign up for your free TradExpress Wallet on web, iOS or Android Devices and follow our easy set up to your profile</p>
                </div>
                <div className='img-cont1'>
                    <img className='f-img' src={Pic4} alt="" />
                </div>

            </div>
            <div className='child-1'>
                <div className='child-2'><img className='j-img' src={Pic5} alt="" /> </div>
                <div className='child-3'>
                    <img className='num-1' src={Pic8} alt="" />

                </div>
                <div className='c-cont3'>
                    <h5 className='ma'>Deposit</h5>
                    <p className='pa'>Choose your prefered deposit option like bank transfer, credit/debit card or send digital assets directly to your wallet for easy funding and withdrawal </p>
                </div>

            </div>
            <div className='child'>
                <div className='c-cont3'>
                    <img className='num' src={Pic9} alt="" />
                </div>
                <div className='c-cont4'>
                    <h5>Buy/Sell Crypto</h5>
                    <p>Buy BTC ,USDT,ETH,LTC,XRP,DOGE and securely store it in your wallet or send it easily to friends and family</p>
                </div>
                <div>
                    <img className='f-img' src={Pic6} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Card2