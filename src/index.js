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

const total=(state=0,action)=>{
    return state
}


///---------------------STORE---------------------------------

const store = createStore(
    combineReducers({
        pizzas,
        total
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
