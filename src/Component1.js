import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pic from './Assets Folder/TradExpress.svg'
import Logo1 from './Assets Folder/Group 68.svg'
import Logo2 from './Assets Folder/Group 69.svg'
import Bgimg from './Assets Folder/Group 127.png'




const Header = () => {
  return (
    <div className='cont-0'  >
      <div className='cont-1'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">   <img src={Pic} alt="" srcset="" />     </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ color: "lightblue" }}  >
            <Nav className="me-auto">
              <Nav.Link href="#home" className='text-white' >Instant Buy/Sell</Nav.Link>
              <Nav.Link href="#link" className='text-white' >Learn</Nav.Link> 
              <Nav.Link href="#link"className='me mee btn btn-light'  >Log in</Nav.Link>
              <Nav.Link href="#link"   className='me  btn btn-light' >Get Started</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='cont-2'>
            
            <h1>Buy, Sell and manage your <br /> Crypto on TradExpress</h1>
          
            <p>Easily Trade Cryptocurrencies like BTC,USDT,ETH,LTC&XRP <br /> with NGN</p>
            <button className='btn-1'>Get Started</button>
            <div className='bg'>
              <img src={Bgimg} alt="" />

            </div>
          </div>
          <div className='cont-3'>

            <img className='na' src={Logo1} alt="" />  <img className='na' src={Logo2} alt="" />
          </div>

        </Container>
      </Navbar>

      </div>
      
      

      


    </div>
    
  )
}

export default Header