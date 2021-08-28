import React, { Component } from 'react'
import {connect} from "react-redux";
import LoadingBar from "react-redux-loading";
import {handleInitialData} from  "../redux/actions/initialData"
import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import PageNotFound from "../views/PageNotFound.js"
import Dashboard from "../views/Dashboard.js"
import Login from "../views/Login.js"
import Leaderboard from "../views/LeaderBoard";


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        {console.log(this.props.loggedIn)}
        <LoadingBar/>
          {
              !this.props.loggedIn ?
                  <Login/>
                  :
                  <Router>
                      <Switch>
                          <Route exact path="/">
                              <Dashboard/>
                          </Route>
                          <Route exact path="/leaderboard">
                              <Leaderboard/>
                          </Route>
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

export default connect(mapStateToProps)(App)