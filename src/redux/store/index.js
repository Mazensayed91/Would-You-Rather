import { createStore, compose, applyMiddleware } from 'redux'

// Middlewares Import
import logger from 'redux-logger'
import thunk from 'redux-thunk';

// Reducers Import

const {questionsReducer} = require('../reducers/questions.js')
const {authedUserReducer} = require('../reducers/authedUsers.js')
const {usersReducer} = require('../reducers/users.js')
const {loadingBarReducer} = require('react-redux-loading')

let {combineReducers} = require('redux')

// Root
const root = combineReducers({
    questions: questionsReducer,
    authedUser: authedUserReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer
})

// Store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(root,
    composeEnhancer(applyMiddleware(thunk, logger)));

export default store