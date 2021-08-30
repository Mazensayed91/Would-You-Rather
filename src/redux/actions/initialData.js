import {getInitialData} from "../../utils/api";
import {showLoading, hideLoading} from "react-redux-loading";
import {receiveUsers} from "./users.js";
import {receiveQuestions} from "./questions.js";

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({questions, users}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}

