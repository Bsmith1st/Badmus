import React from 'react'
import './Footer2.css'
import Pic1 from './Assets Folder/WhatsApp Image 2022-11-17 at 5.24.24 AM.jpeg'
import Pic2 from './Assets Folder/WhatsApp Image 2022-11-17 at 5.24.24 AM (1).jpeg'
import Pic3 from './Assets Folder/WhatsApp Image 2022-11-17 at 5.24.22 AM.jpeg'

function Footer2() {
  return (
    <div  className='img-footer' >
        <h1 className='b'>Customer's Review</h1>
        <img src={Pic1} alt="" />
        <img src={Pic2} alt="" />
        <img src={Pic3} alt="" />
    </div>
  )
}

export default Footer2