import React from 'react'
import { FaFacebook, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './Footer3.css'

function Footer3() {
    return (
       <div>
         <div className='main'>
            <div className='sub-1'>
                <div>
                    <h4 className='a'>Product</h4>
                    <p>Bitcoin</p>
                    <p>Alt-Coin</p>
                    <p>Fiat</p>
                    <p>P2P</p>
                    <p>refill</p>


                </div>
                <div>
                    <h4 className='a'>Company</h4>
                    <p>About us</p>
                    <p>Career</p>
                    <p>Rates</p>
                    <p>Mobiles</p>

                </div>
                <div>
                    <h4 className='a'>Legal</h4>
                    <p>Privacy Policy</p>
                    <p>Anti-Money Laundering</p>
                    <p>Terms and Condition</p>

                </div>
            </div>

            <div className='sub-1 '>
                <div>
                    <h4 className='a'>Learn</h4>
                    <p>Blog</p>
                    <p>Help Center</p>
                </div>
                <div>
                    <h4 className='a'>Contact</h4>
                    <p>Bsmith1st@icloud.com</p>
                    <p>Support@bsmith.com</p>
                    <div className='logo'>
                        <a href="##"><FaTwitter /></a>
                        <a href="##"><FaTelegramPlane /></a>
                        <a href="##"><FaFacebook /></a>
                        <a href="##"><FaWhatsapp /></a>
                    </div>
                </div>
                    
            </div>
            
        </div>

            <small>&copy;Bsmith Tech All right reserve</small>
       </div>
    )
}

export default Footer3