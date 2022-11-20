import React, {useEffect,useState} from 'react'

import ArrowDown from './Assets Folder/WhatsApp Image 2022-11-16 at 2.12.37 AM.jpeg'
import ArrowUp from './Assets Folder/WhatsApp Image 2022-11-16 at 2.13.06 AM.jpeg'

const Dbs = () => {
    const [value, setValue] = useState(0)
    const [data, setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    let [change_24h, setChange_24h] = useState()

 
    useEffect(()=>{
        setTimeout(()=>{

            fetch('https://api.coinlore.net/api/tickers/?start=0&limit=6')
              .then((res) => res.json())
              .then((rep) => setData(rep.data) ,setIsLoading(false))
        },8000)

    })
     

    if(isLoading){
        return(
            <div>
                <p className='loading'>Loading, please wait...</p>
            </div>
        )
    }

  return (
    <div>
        <div className='rendernew'>
            {data.map((datum)=>{
                const {id,name,symbol,price_usd,percent_change_24h} = datum
                return(
                    <div id='datums' key={id}>
                        <p className='names'> <b> {name} </b></p>
                        <p className='symbol'>{symbol}</p> 
                        <p className='price-usd'>${price_usd} {percent_change_24h} <img src={percent_change_24h > 0 ? ArrowUp : ArrowDown} alt="" /> </p> <hr />

                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Dbs