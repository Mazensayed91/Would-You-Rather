import React, { Component } from 'react'
import {connect} from "react-redux";
import InputLabel from '@material-ui/core/Button';
import Select from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/Button';
import {setAuthedUser} from "../redux/actions/authedUsers.js";

class Login extends Component {

    authUser = (userId) => {
        console.log("el props", this.props, userId)
        this.props.dispatch(setAuthedUser(userId));
    }
    render() {
        return (
            <React.Fragment>
            <div>
                <InputLabel>Users:</InputLabel>
                <Select>
                    {this.props.data ? this.props.data.map(user => {
                        return <div key = {user[0]}> <MenuItem onClick={() => this.authUser(user[1])}>{user[1] }</MenuItem></div>
                    }): 0}
                </Select>

            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({users}) => {

    console.log("users", users)
    let usersData = users['users']
    let data = users['users'] ? Object.values(usersData).map((user) => {
        return [user.name, user.id]
    }):0
    return {
        data
    }
}

export default connect(mapStateToProps)(Login)