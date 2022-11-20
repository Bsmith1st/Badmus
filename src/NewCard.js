import React from 'react'
import'./NewCard.css'
import Pic1 from './Assets Folder/rafiki-lady.png'
import Pic2 from './Assets Folder/cuate.png'
import Pic3 from './Assets Folder/a.jpg'
import { useState } from 'react'

const Moredetails  = () => {
  return (
    <div>
        <div className='nc-2'>
            <div className='container ff'>
                <div className='easymode'>
                    <img src={Pic1} alt="" />
                    <h3>Easy Mode of Payment</h3>
                    <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay services</p>

                </div>
                <div className='finance'>
                    <img src={Pic2} alt="" />
                    <h3> Financial Freedom</h3>
                    <p> Just like the internet no single entity controls the Cryto network which provide user transparency and privacy,which puts in absolute controls of your money.</p>

                </div> 
                <div className='investment'>
                    <img src={Pic3} alt="" />
                    <h3>Investment</h3>
                    <p>The constant demand as made Crytocurrencies a Digital Gold use for alternative store of wealth on long term investments</p>

                </div> 

            </div>
        </div>
    </div>
  )
}

const NewCard = () => {

    const [state,setState] = useState(false)
    return (


        
    <div className='learnmore'>
        <button className='seemore' onClick={()=> setState(!state)}>{state ? 'show less' : 'show more'}</button>
        {state && <Moredetails/>}
    </div>
        
    )
}






export default NewCard


