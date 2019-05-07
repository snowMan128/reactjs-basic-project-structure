import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {authService} from "../services/auth.service";
import NProgress from 'nprogress'

function PrivateRoute({component: Component, ...rest}) {
    const isAuthenticated = authService.isAuthenticated();

    console.log(isAuthenticated);

    //n-progress start and stop handling
    useEffect(() => {
        NProgress.start();
    });

    useEffect(() => {
        NProgress.done();
    }, []);

    return (
        <Route {...rest} render={props => {

            return (
                isAuthenticated
                    ? <Component data={rest} {...props} />
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            )
        }}/>
    )
}

export default PrivateRoute