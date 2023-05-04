import React from 'react';
import axios from 'axios';
import './App.css';
import Order from '../Order/Order';

//---------------------Router---------------------------------
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function App() {
const total=useSelector((store)=>store.total)
  return (
    <div className='App'>

    

      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza </h1>
        <div className='total'><img className='cart' src="images/cart.png" alt="" /> {total}</div> 
      </header>
     

      <Router exact path="/">
        <Order />
          
      </Router>
    </div>
  );
}

export default App;
