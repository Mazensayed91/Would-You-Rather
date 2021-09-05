import React, {Component} from 'react';
import Tab from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {Redirect} from "react-router"
//<Redirect exact from='/' to={window.location.href.replace("http://localhost:3000", "")}/>
class NavBar extends Component {
    state = {
        redirect: false
    }
    handleOnClick = () => {
        // redirect
        this.setState({redirect: true});
    }
    render() {
        if (this.state.redirect) {
            console.log("here we are")
            return <Redirect push to="/" />;
        }
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

            {console.log("el console", window.location.href)}

            <p />

        </React.Fragment>
    );
}}

export default NavBar