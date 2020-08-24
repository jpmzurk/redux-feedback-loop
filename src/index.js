import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//make new object by replacing old w/out mutating
function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}

const initialState = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: 'You left no comments',
    student: 'name not provided'
}

const feedbackValues = (state = initialState, action) => {
    if (action.type === 'SET_FEELING') {
        return updateObject(state, { feeling: action.payload })
    }
    else if (action.type === 'SET_UNDERSTAND') {
        return updateObject(state, { understanding: action.payload })
    }
    else if (action.type === 'SET_SUPPORTED') {
        return updateObject(state, { support: action.payload })
    }
    else if (action.type === 'SET_COMMENT') {
        if (action.payload === '') {
            return state
        } else
            return updateObject(state, { comments: action.payload })
    }
    else if (action.type === 'CLEAR') {
        return updateObject(state, { initialState })
    }
    else if (action.type === 'NAME') {
        return updateObject(state, { student: action.payload })
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
