import React from 'react'
import {connect} from "react-redux";
import PieChart from '../helperComponents/PieChart'
import {Button} from "@material-ui/core";
import {Redirect, Link} from "react-router-dom";
import {handleAnsweringQuestion} from "../redux/actions/questions";
import PageNotFound from "./PageNotFound";

class QuestionDetails extends React.Component {


    handleRadioButtonClick = async (option) => {
        this.props.dispatch(handleAnsweringQuestion((
            {
                authedUser: this.props.authedUser,
                qid: this.props.questionId,
                answer: option
            })));

    }

    render(){
        if(!(this.props.questionId in this.props.questions)){
            return(
                <PageNotFound/>
            )
        }
        return (
            <div>
                {console.log("check", this.props.questionId in this.props.questions)}
                <h1>{this.props.questions[this.props.questionId].author}  <i>asks would you rather?</i></h1>
                {}
                {this.props.questions[this.props.questionId].optionOne.votes.includes(this.props.authedUser)
                ||
                this.props.questions[this.props.questionId].optionTwo.votes.includes(this.props.authedUser)
                ?
                        <PieChart
                            options = {{"Option1":100 * this.props.questions[this.props.questionId].optionOne.votes.length
                                    /
                                    (
                                    this.props.questions[this.props.questionId].optionOne.votes.length
                                    +
                                    this.props.questions[this.props.questionId].optionTwo.votes.length
                                    ),
                                        "Option2":100 * this.props.questions[this.props.questionId].optionTwo.votes.length
                                            /
                                            (
                                                this.props.questions[this.props.questionId].optionOne.votes.length
                                                +
                                                this.props.questions[this.props.questionId].optionTwo.votes.length
                                            )}}
                            optionOne = {this.props.questions[this.props.questionId].optionOne.text}
                            optionTwo = {this.props.questions[this.props.questionId].optionTwo.text}

                        />
                    :
                    (
                        <div style = {{
                            margin: "auto",
                            width: "50%",
                            padding: "10px"
                        }}>
                    <form onSubmit={ async (event) =>  {
                        event.preventDefault()
                        window.history.pushState(null, null, '/');
                        return <Redirect to="/"/>
                    }}>
                        <input type="radio" name="option" value="optionOne" id="optionOne"/>
                            <label>{this.props.questions[this.props.questionId].optionOne.text}</label><br/>
                            <br/>
                        <input type="radio" name="option" value="optionTwo" id="optionTwo"/>
                            <label>{this.props.questions[this.props.questionId].optionTwo.text}</label>
                            <br/>
                            <br/>
                        <Link to='/'>
                            <Button type="submit" variant="outlined" color="primary"
                                onClick={() => {
                                    if (document.getElementById('optionOne').checked) {
                                        this.handleRadioButtonClick('optionOne').then(r => {});

                                    } else if(document.getElementById('optionTwo').checked) {
                                        this.handleRadioButtonClick('optionTwo').then(r => {});

                                    }
                                }}>
                                    Submit Answer
                                </Button>
                        </Link>
                    </form>
                            </div>
                    )
                }
            </div>
        )
    }
}


const mapStateToProps = ({authedUser, questions}) => {

    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionDetails)