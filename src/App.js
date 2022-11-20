// import logo from './logo.svg';
import './App.css';
import Component1 from './Component1'
import Dbs from './Dbs'
// import Cards from'./Cards'
import Card2 from './Card2';
import Footer1 from './Footer1';
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import NewCard from './NewCard';


function App() {
  return (
    <div className="App">
      <Component1></Component1>
      <Dbs></Dbs>
      <NewCard />

      {/* <Cards></Cards> */}
      <Card2></Card2>
      <Footer1></Footer1>
      <Footer2></Footer2>
      <Footer3></Footer3>
      {/* <small>&copy;Bsmith Tech All right reserve</small> */}
      
    </div>
  );
}

export default App;
