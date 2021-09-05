import React, {Component} from 'react';
import Tab from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

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
                    width:'300px',
                    rightAlign: {
                        marginLeft: 'auto',
                    }
                }
            }>
                {this.props.authedUser}
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