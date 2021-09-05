import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App.jsx'
import store from './redux/store/index.js'
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch} from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App/>
            </Switch>
        </Router>
    </Provider>,

    document.getElementById('root'))