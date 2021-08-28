const {USERS_CONSTANTS} = require('../constants/index.js');


module.exports.receiveUsers = (users) => ({
    type: USERS_CONSTANTS.RECEIVE_ALL_USERS,
    payload: {users}
})