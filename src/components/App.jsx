import React, { Component } from 'react'
import {connect} from "react-redux";
import LoadingBar from "react-redux-loading";
import {handleInitialData} from  "../redux/actions/initialData"
import {BrowserRouter as Router , Route, Switch, withRouter} from "react-router-dom"
import PageNotFound from "../views/PageNotFound.js"
import Dashboard from "../views/Dashboard.js"
import Login from "../views/Login.js"
import Leaderboard from "../views/LeaderBoard";
import NewQuestion from "../views/NewQuestion";
import NavBar from "../helperComponents/NavBar.js";
import QuestionDetails from "../views/QuestionDetails";


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar/>
          {
              !this.props.loggedIn ?
                  <Login/>
                  :

                  <Router>
                      <NavBar/>

                      <Switch>
                          <Route exact path="/">
                              <Dashboard/>
                          </Route>
                          <Route exact path="/leaderboard" component = {withRouter(Leaderboard)}/>
                          <Route exact path="/new_question" component = {withRouter(NewQuestion)}/>
                          <Route path="/question/:id" render={(match) => <QuestionDetails
                              questionId = {match.match.params.id}/>}
                          />

                          <Route component={PageNotFound} />
                      </Switch>
                  </Router>
          }

      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
    return {
        loggedIn: authedUser !== null
    }
}

export default withRouter(connect(mapStateToProps)(App))