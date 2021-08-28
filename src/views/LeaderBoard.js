import React, { Component } from 'react'
import {connect} from "react-redux";

class Leaderboard extends Component {


    render() {
        return (
            <div>
                {console.log("el props", this.props)}
                {this.props.sortedLeaderboard.map((user) => {
                    return <div key = {user[1]}>
                        <h1>{user[0]}</h1>
                        <h2>{user[2]}</h2>
                    </div>
                })}

            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    let usersData = users['users']
    let questionsData = users['questions']

    let userLeaderboard = Object.values(usersData).map((user) => {
        console.log("elbolbol", user, user.questions.length +  Object.keys(user.answers).length)
        return [user.questions.length +  Object.keys(user.answers).length, user.avatarURL, user.name]
    })
    console.log("userLeaderboard", userLeaderboard)
    console.log("data", questionsData, usersData)
    let sortedLeaderboard = userLeaderboard.sort(function(a, b) { return -a[0] + b[0]; });
    console.log("dataaa", sortedLeaderboard)

    return {
        sortedLeaderboard
    }
}

export default connect(mapStateToProps)(Leaderboard)