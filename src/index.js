import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import {store} from "./utils";
import {Provider} from "react-redux";
import "./styles/index.scss"
import axios from "axios"
import {authService} from "./services/auth.service";
import {Router, Route} from "react-router-dom";
import {history} from "./utils/history";

// set headers here!
axios.defaults.headers.common['Authorization'] = authService.getToken();
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    if (error.response && 401 === error.response.status) {

        // authService.logout()

    } else {
        return Promise.reject(error);
    }
});


ReactDOM.render(<Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
