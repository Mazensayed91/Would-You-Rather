import React, { Component } from 'react'
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import {handleAddingQuestion} from "../redux/actions/questions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



class NewQuestion extends Component {


    state = {
        optionOne: "",
        optionTwo: "",
        redirectFlag: 0
    }
    handleOnSubmit = (e) => {

        this.props.dispatch(handleAddingQuestion({
            optionOne: this.state.optionOne,
            optionTwo: this.state.optionTwo,
            authedUser: this.props.authedUser
        }))

        e.preventDefault();
        this.setState({
            redirectFlag: 1
        });
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const newValue = e.target.value;
        this.setState({ [name]: newValue });
    };

    render() {
        if(this.state.redirectFlag){
            return <Redirect to="/" />
        }
        return (
            <div className="App">
                <Paper>
                    <Typography variant="h5" component="h3">
                       New Question
                    </Typography>
                    <br/>
                    <Typography component="p"> Would you rather</Typography>

                    <form onSubmit={
                        (e) => {
                          e.preventDefault();
                        }
                    }>

                        <br/>
                        <TextField
                            label="Option 1"
                            id="margin-normal"
                            name="optionOne"
                            className="optionOne"
                            helperText="e.g. develop with react"
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            label="Option 2"
                            id="margin-normal"
                            className="optionTwo"
                            name="optionTwo"

                            helperText="e.g. develop with vue"
                            onChange={this.handleInputChange}
                        />
                        <br/><br/><br/>
                        <Button
                            onClick={(e) => {
                                this.handleOnSubmit(e);
                            }}
                            value="submit"
                            type="submit"
                            variant="outlined"
                            color="primary"
                        >
                            Submit Question
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({authedUser}) => {

    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)



