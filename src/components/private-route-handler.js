import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {authService} from "../services/auth.service";
import NProgress from 'nprogress'

class PrivateRouteHandler extends Component {
    componentWillMount() {
        NProgress.start()
    }

    componentDidMount() {
        NProgress.done()
    }

    renderRoutes = (props) => {
        const {component: Component, private: isPrivate, redirectOnAuth, ...rest} = this.props
        const isAuthenticated =true// authService.isAuthenticated();

        if (isAuthenticated) {
            if (isPrivate || (!isPrivate && !redirectOnAuth))
                return <Component data={rest.data} {...props} />
            else if (!isPrivate && redirectOnAuth)
                return <Redirect to={{pathname: '/', state: {from: props.location}}}/>
               // return "Redirected to public component"

        } else if (!isAuthenticated) {
            if (isPrivate) {
                return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>

            } else if (!isPrivate) {
                return <Component data={rest.data} {...props} />
            }
        }

    }

    render() {
        const {component: Component, ...rest} = this.props

        return (
            <Route {...rest} render={this.renderRoutes}/>
        )
    }

}

export default PrivateRouteHandler
