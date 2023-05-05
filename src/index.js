import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';


//---------------------REDUX---------------------------------

import { applyMiddleware,combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

import logger from 'redux-logger';

//---------------------REDUCERS---------------------------------

const pizzas= (state=[],action) => {
    if (action.type === 'SET_PIZZAS'){
        const thePizza= action.payload;
        return thePizza;
    }
    return state
}

const orderedPizzaId= (state=[],action) =>{
    if (action.type ==='ADD_ORDER'){
        
        const newOrderId= action.payload

        const  copyOfId= [...state];

        copyOfId.push(newOrderId)

        return copyOfId;
    }
    if (action.type ==='REMOVE_ORDER'){
        for (let id of state){
            if (id === action.payload){
                const idIndex=state.indexOf(id)
                state.splice(idIndex,1)
            }
        }
    }
    return state
}

const total=(state=[],action)=>{
    
    if (action.type==='ADD_PRICE'){
        
        const newPrice=action.payload;
        const copyOfPrice=[...state]
        copyOfPrice.push(newPrice)
        console.log('this---->',copyOfPrice); 
        
        return copyOfPrice
    } 
      if (action.type ==='REMOVE_PRICE'){
        for (let id of state){
            console.log('this is id',action.payload);
            if (id === action.payload){
                const newPrice=action.payload;
        const copyOfPrice=[...state]
        
                const idIndex=copyOfPrice.indexOf(id)
                copyOfPrice.splice(idIndex,1)
                return copyOfPrice
            }
        }
    }
  
    return state
}


///---------------------STORE---------------------------------

const store = createStore(
    combineReducers({
        pizzas,
        total,
        orderedPizzaId
    }), 
    applyMiddleware(
        logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
             <App />
        </React.StrictMode>
    </Provider>
);
