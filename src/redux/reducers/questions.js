const {QUESTIONS_CONSTANTS} = require('../constants/index.js');

module.exports.questionsReducer = (questions = {}, action) => {
    switch(action.type) {
        case QUESTIONS_CONSTANTS.RECEIVE_ALL_QUESTIONS:
            return {...questions, ...action.payload.questions}
        case QUESTIONS_CONSTANTS.ADD_QUESTION:
            return {...questions,
                    [action.payload.question.id]: action.payload.question}
        case QUESTIONS_CONSTANTS.ANSWER_QUESTION:
            const {authedUser, qid, answer} =  action.payload;
            let modifiedQuestions =  Object.assign({}, questions);
            Object.assign(modifiedQuestions[qid][answer].votes,
                [...modifiedQuestions[qid][answer],
                    ...modifiedQuestions[qid][answer].votes, authedUser])
            return modifiedQuestions

        default:
            return questions
    }
}