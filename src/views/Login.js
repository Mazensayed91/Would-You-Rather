import React, { Component } from 'react'
import {connect} from "react-redux";
import Select from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import {setAuthedUser} from "../redux/actions/authedUsers.js";

class Login extends Component {

    authUser = (userId) => {
        this.props.dispatch(setAuthedUser(userId));
    }
    render() {
        return (
            <React.Fragment>
            <div>
                <br/>
                <h1>Select User:</h1>
                <br/>
                <br/>
                <Select>
                    {this.props.data ? this.props.data.map(user => {
                        return <div key = {user[0]}>
                            <MenuItem onClick={() => this.authUser(user[1])}>{user[1] }</MenuItem>
                        </div>
                    }): 0}
                </Select>

            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({users}) => {

    let usersData = users
    let data = users ? Object.values(usersData).map((user) => {
        return [user.name, user.id]
    }):0
    return {
        data
    }
}

export default connect(mapStateToProps)(Login)