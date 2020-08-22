import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

    //make new object by replacing old
    //aka replace object key value w/out mutating
function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}

const initialState = {
    feeling: 0,
    understanding: 0,
    supported: 0,
    comments: ''
  }

const feedbackValues = (state = initialState, action) => {
    if (action.type === 'SET_FEELING'){
        return updateObject(state, {feeling : action.payload})
    }
    else if (action.type === 'SET_UNDERSTAND') {
        return updateObject(state, {understanding : action.payload})
    }
    else if (action.type === 'SET_SUPPORTED') {
        return updateObject(state, {understanding : action.payload})
    }
    else if (action.type === 'SET_COMMENT') {
        return updateObject(state, {comments : action.payload})
    }
    return state;
};


const store = createStore(
    combineReducers({
        feedbackValues,
    }),   
    applyMiddleware(logger),
 );
  
  
 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
