import React, {Component} from 'react';
import Tab from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthedUser} from "../redux/actions/authedUsers.js";

class NavBar extends Component {

    render() {
        return (

        <React.Fragment>

            <Tab>
               <Link to = "/">Home</Link>
            </Tab>
            <Tab>
                <Link to = "/add"> New Question </Link>
            </Tab>
            <Tab>
                <Link to = "/leaderboard"> Leaderboard </Link>
            </Tab>
            <Tab style={
                {
                    float:'right',
                    width:'200px',
                    rightAlign: {
                        marginLeft: 'auto',
                    }
                }
            }>

                {this.props.authedUser}
            </Tab>
            <Tab style={
                {
                    float:'right',
                    width:'200px',
                    rightAlign: {
                        marginLeft: 'auto',
                    }
                }
            }
            onClick={
                () => {
                    this.props.dispatch(setAuthedUser(null))
                }
            }>

                LOGOUT
            </Tab>
            <p />

        </React.Fragment>
    );
}}

const mapStateToProps = ({authedUser}) => {

    return {
        authedUser}
}


export default connect(mapStateToProps)(NavBar)