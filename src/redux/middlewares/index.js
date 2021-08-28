const {logger} = require('./logger.js')
const {thunk} = require('redux-thunk')
const {applyMiddleware} = require('redux')

export default applyMiddleware(thunk, logger)