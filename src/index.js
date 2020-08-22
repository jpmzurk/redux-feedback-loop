import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//get feedback
const getFeedback = (state = [], action) => {
    if (action.type === 'GET_FEEDBACK'){
        return action.payload
    }
    return state;
}

//MAKE A REDUCER FOR EACH PAGE???d
///TRY CHOOSING LAST VALUE OF ARRAY FOR EACH REDUCER


//add to list of feedback
const feedbackValues = (state = [], action) => {
    // TODO: Pizzas added to the cart
    if (action.type === 'ADD_VALUE'){
        return [...state, action.payload]
    } 
    return state;
};

// //holds user info
// const userReducer = (state = [], action) => {
//     if (action.type === 'ADD_NEW_USER') {
//         return [...state, action.payload];
//     }
//     return state;
// };


const store = createStore(
    combineReducers({
        getFeedback,
        feedbackValues,
        // userReducer
    }),   
    applyMiddleware(logger),
 );
  
  
 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
