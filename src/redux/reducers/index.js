const {questions} = require('./questions.js')
const {authedUser} = require('./authedUsers.js')
const {users} = require('./users.js')
const {loadingBarReducer} = require('react-redux-loading')
let {combineReducers} = require('redux')


const root = combineReducers({
    questions,
    authedUser,
    users,
    loadingBar: loadingBarReducer
})

export default root