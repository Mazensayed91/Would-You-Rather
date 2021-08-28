import {getInitialData} from "../../utils/api";
import {showLoading, hideLoading} from "react-redux-loading";
import {receiveUsers} from "./users.js";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUsers";

const AUTH_ID = 'sarahedo'

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then((users,questions) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTH_ID));
            dispatch(hideLoading());
        })
    }
}

