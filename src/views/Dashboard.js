import React, { Component } from 'react'
import {connect} from "react-redux";
import Question from '../helperComponents/Question.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


class Dashboard extends Component {


    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Answered Questions</Tab>
                        <Tab>Unanswered Questions</Tab>
                    </TabList>

                    <TabPanel>
                        {this.props.answeredQuestions ? Object.values(this.props.answeredQuestions).map((question) => {
                                return <Question
                                    key = {question.timestamp}
                                    author = {question.author}
                                    optionOne = {question.optionOne['text']}
                                    optionTwo = {question.optionTwo['text']}
                                    questionId = {question.id}
                                />
                            })
                            :
                            []}
                    </TabPanel>
                    <TabPanel>
                        {this.props.unAnsweredQuestions ? Object.values(this.props.unAnsweredQuestions).map((question) => {
                                return <Question
                                    key = {question.timestamp}
                                    author = {question.author}
                                    authedUser = {this.props.authedUser}
                                    optionOne = {question.optionOne['text']}
                                    optionTwo = {question.optionTwo['text']}
                                    questionId = {question.id}
                                    />
                            })
                            :
                            []}
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}


const mapStateToProps = ({users, questions, authedUser}) => {

    Object.filter = (object, filteringFunction) => {
        return Object.keys(object)
            .filter(key => filteringFunction(object[key]))
            .reduce((res, key) => {
                return (res[key] = object[key], res)
            }, {});
    }
    let answeredQuestions = Object.filter(questions, question => {
        return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    })
    let unAnsweredQuestions = Object.filter(questions, question => {
        return !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)
    })
    return {
        authedUser,
        answeredQuestions,
        unAnsweredQuestions
    }
}

export default connect(mapStateToProps, null)(Dashboard)