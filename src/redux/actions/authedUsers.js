const {AUTHED_USER_CONSTANTS} = require('../constants/index.js');

module.exports.setAuthedUser = (userID) => ({
        type: AUTHED_USER_CONSTANTS.SET_AUTHED_USER,
        payload: {userID}
})

module.exports.removeAuthedUser = () => ({
    type: AUTHED_USER_CONSTANTS.REMOVE_AUTHED_USER,
})