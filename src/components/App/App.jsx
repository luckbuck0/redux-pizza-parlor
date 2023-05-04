import React from 'react';
import axios from 'axios';
import './App.css';
import Order from '../Order/Order';
import { useEffect } from 'react';
//---------------------Router---------------------------------
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';

function App() {

useEffect(()=>{
  getPizzas();
},[])

const total=useSelector((store)=>store.total)

const dispatch=useDispatch()

const getPizzas=()=>{axios({
  method: 'GET',
  url: '/api/pizza'
}).then((response)=>{
  const pizzas= response.data 

  dispatch({
    type: 'SET_PIZZAS',
    payload: pizzas
  })
}).catch((error)=>{
  console.log('cmon guy get it together--->',error);
})
}
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
