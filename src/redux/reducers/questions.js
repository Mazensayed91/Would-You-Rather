const {QUESTIONS_CONSTANTS} = require('../constants/index.js');

module.exports.questionsReducer = (questions = {}, action) => {
    switch(action.type) {
        case QUESTIONS_CONSTANTS.RECEIVE_ALL_USERS:
            return {...questions, ...action.payload.questions}
        case QUESTIONS_CONSTANTS.ADD_QUESTION:
            return {...questions,
                    [action.payload.question.id]: action.payload.question}
        case QUESTIONS_CONSTANTS.ANSWER_QUESTION:
            const {user, qid, answer} =  action.payload;
            return {...questions,
                [qid] : {...questions[qid], [questions[qid][answer]]:{
                        ...questions[qid][answer],
                        votes: [...questions[qid][answer].votes, user]
            }}}

        default:
            return questions
    }
}