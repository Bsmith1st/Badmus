import React from 'react'
import { useState } from 'react'
import { card_1 } from './Carddata'



function Cards() {
  const [details, setDetails] = useState(card_1)

  return (
    <div className='cards'>
      <h4>Why do people get involved with Cryptocurrencies</h4>
      function name(params) {

      }

      {details.map((detail) => {
        const { id, img, head, text } = detail
        return (
          <div key={id} >
            <img src={img} alt="" />
            <h3> {head} </h3>
            <p> {text} </p>

          </div>

        )

      })}
      <   button className='seemore' onClick={() => setDetails(!details)}>
        {details ? 'showless' : 'show more'}
      </button>
      {details && <card_1/>}
    </div>


  )
}



export default Cards