const {USERS_CONSTANTS, QUESTIONS_CONSTANTS} = require('../constants/index.js');

module.exports.usersReducer = (users = {}, action) => {
    switch(action.type) {
        case USERS_CONSTANTS.RECEIVE_ALL_USERS:
            return {...users, ...action.payload.users}
        case QUESTIONS_CONSTANTS.AUTHED_USER_ADD_QUESTION:
            const {qid, user} = action.payload
            return {...users, [user]: {...users[user],
                                        questions: [...users[user].questions, qid]}}
        case QUESTIONS_CONSTANTS.AUTHED_USER_ANSWER_QUESTION:
            const {questionID, author, answer} = action.payload
            return {...users, [author]: {...users[author],
                    answers: {...users[author].answers, [questionID]: answer}}}
        default:
            return users
    }
}