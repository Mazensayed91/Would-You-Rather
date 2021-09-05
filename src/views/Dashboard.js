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
                        <Tab>Unanswered Questions</Tab>
                        <Tab>Answered Questions</Tab>
                    </TabList>
                    <TabPanel>
                        {this.props.unAnsweredQuestionsSorted ? Object.values(this.props.unAnsweredQuestionsSorted).map((question) => {
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
                    <TabPanel>
                        {this.props.answeredQuestionsSorted ? Object.values(this.props.answeredQuestionsSorted).map((question) => {
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

                </Tabs>
            </div>
        )
    }
}


const mapStateToProps = ({questions, authedUser}) => {

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
    console.log("answeredQuestions", answeredQuestions);
    console.log("sortedAnsweredQuestions", Object.keys(answeredQuestions).sort(
        function(a,b){return answeredQuestions[a].timestamp-answeredQuestions[b].timestamp})
    )
    let unAnsweredQuestions = Object.filter(questions, question => {
        return !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)
    })
    console.log("sortedUnAnsweredQuestions", Object.keys(unAnsweredQuestions).sort(
        function(a,b){return unAnsweredQuestions[a].timestamp-unAnsweredQuestions[b].timestamp})
    )

    const answeredQuestionsSorted =
        Object.keys(answeredQuestions)
            .sort((a, b) => answeredQuestions[b].timestamp - answeredQuestions[a].timestamp)
            .reduce(
                (_sortedObj, key) => ({
                    ..._sortedObj,
                    [key]: answeredQuestions[key]
                }),
                {}
            );

    const unAnsweredQuestionsSorted =
        Object.keys(unAnsweredQuestions)
            .sort((a, b) => unAnsweredQuestions[b].timestamp - unAnsweredQuestions[a].timestamp)
            .reduce(
                (_sortedObj, key) => ({
                    ..._sortedObj,
                    [key]: unAnsweredQuestions[key]
                }),
                {}
            );
    return {
        authedUser,
        answeredQuestionsSorted,
        unAnsweredQuestionsSorted
    }
}

export default connect(mapStateToProps, null)(Dashboard)