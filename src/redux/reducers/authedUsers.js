const {AUTHED_USER_CONSTANTS} = require('../constants/index.js');

module.exports.authedUserReducer = (authedUser = null, action) => {
    switch(action.type) {
        case AUTHED_USER_CONSTANTS.SET_AUTHED_USER:
            return action.payload.userID
        case AUTHED_USER_CONSTANTS.REMOVE_AUTHED_USER:
            return null
        default:
            return authedUser
    }
}