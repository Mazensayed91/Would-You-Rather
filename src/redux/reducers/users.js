const {USERS_CONSTANTS, QUESTIONS_CONSTANTS} = require('../constants/index.js');

module.exports.usersReducer = (users = {}, action) => {

    if(action.payload) {
        const {qid, author, answer} = action.payload
        switch (action.type) {
            case USERS_CONSTANTS.RECEIVE_ALL_USERS:
                return {...users, ...action.payload.users}
            case QUESTIONS_CONSTANTS.AUTHED_USER_ADD_QUESTION:
                const {authedUser} = action.payload

                return {
                    ...users, [authedUser]: {
                        ...users[authedUser],
                        questions: [...users[authedUser].questions, qid]
                    }
                }
            case QUESTIONS_CONSTANTS.AUTHED_USER_ANSWER_QUESTION:
                return {
                    ...users, [author]: {
                        ...users[author],
                        answers: {...users[author].answers, [qid]: answer}
                    }
                }
            default:
                return users
        }
    }
    return users
}