const {QUESTIONS_CONSTANTS} = require('../constants/index.js');
const {showLoading, hideLoading} = require('react-redux-loading')
const {saveQuestion, saveQuestionAnswer} = require('../../utils/api.js')

module.exports.receiveQuestions = (questions) => ({
    type: QUESTIONS_CONSTANTS.RECEIVE_ALL_QUESTIONS,
    payload: {questions}
})


const addQuestion = (question) => ({
    type: QUESTIONS_CONSTANTS.ADD_QUESTION,
    payload: {question}
})

const authedUserAddQuestion = ({qid, author}) => ({
    type: QUESTIONS_CONSTANTS.AUTHED_USER_ADD_QUESTION,
    payload: {qid, author}
})

const addAnswer = ({ authedUser, qid, answer }) => ({
    type: QUESTIONS_CONSTANTS.ANSWER_QUESTION,
    payload: {  authedUser, qid, answer }
})

const authedUserAnswerQuestion = ({qid, author, answer}) => ({
    type: QUESTIONS_CONSTANTS.AUTHED_USER_ANSWER_QUESTION,
    payload: {qid, author, answer}
})

// Separating UI from API handling using Thunks
module.exports.handleAddingQuestion = ({optionOne, optionTwo, authedUser}) => {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestion({optionOne, optionTwo, authedUser}).then((question) => {
            dispatch(addQuestion(question));
            dispatch(authedUserAddQuestion({qid: question.id, author: authedUser}));
            dispatch(hideLoading())
        })
    }
}

module.exports.handleAnsweringQuestion = ({ authedUser, qid, answer }) => {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(addAnswer({ authedUser, qid, answer }));
            dispatch(authedUserAnswerQuestion({qid: qid, answer: answer, author: authedUser}));
            dispatch(hideLoading())
        })
    }
}