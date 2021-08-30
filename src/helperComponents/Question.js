import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography} from "@material-ui/core";
import {withRouter, Link} from "react-router-dom";


class Question extends Component {

    state = {
        reload: false
    }

    shouldReload() {
        this.setState({reload:!this.state.reload});
    }

    render() {
        return (
            <div>
                <Link to={"/question/" + this.props.questionId}>
                    <Card style={{
                    maxWidth: 400,
                    margin: "auto",
                    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                    "&:hover": {
                        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
                    }
                }}>
                    <ButtonBase onClick={() => {
                        this.shouldReload()
                        this.forceUpdate();

                    }}>
                        {this.props.author ?
                            <CardContent>
                                <Typography>{this.props.author} asks a question: Would You Rather?</Typography>
                                <Typography>{this.props.optionOne}</Typography>
                                <Typography>OR</Typography>
                                <Typography>{this.props.optionTwo}</Typography>
                                {this.props.authedUser === this.props.author ? <i style={{
                                    color: "red"
                                }}>
                                    Your Question
                                </i> : [] }
                            </CardContent>: []
                        }
                    </ButtonBase>
                </Card>
                </Link>
                <br/>
            </div>

        )
    }
}



export default withRouter(Question)
