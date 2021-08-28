import React, { Component } from 'react'
import {connect} from "react-redux";

class Dashboard extends Component {


    render() {
        return (
            <div>
                Dashboard
            </div>
        )
    }
}


const mapStateToProps = (data) => {

    let authedUser = data.authedUser;
    let users = data.users.users;
    let questions = data.users.questions;
    console.log("data", authedUser, users[authedUser], questions)

    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Dashboard)