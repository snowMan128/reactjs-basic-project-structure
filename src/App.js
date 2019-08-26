import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {authService} from "./services/auth.service"
import {authActions} from "./actions/auth.actions";
import {Route, Switch, withRouter} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import {history, routes} from "./utils";
import MainHeader from "./components/main-header";
import MainSidebar from "./components/main-sidebar";
import {settingsActions} from "./actions/settings.actions";
import PrivateRouteHandler from "./components/private-route-handler";
import cx from "classnames";

function App(props) {

    const {main_sidebar_close, isAuthenticated, location, page_title} = props

    useEffect(() => {

        const {dispatch} = props;
        dispatch(authActions.setLoggedIn(authService.isAuthenticated()))

        // set document title on route enter
        routes.map(route => {
            if (route.path === location.pathname)
                dispatch(settingsActions.setCurrentPageTitle(route.title))

            return route
        })

        // change document title on route change
        history.listen((location, action) => {

            routes.map(route => {
                if (route.path === location.pathname)
                    dispatch(settingsActions.setCurrentPageTitle(route.title))

                return route
            })

        })
    }, [])

    const renderSwitch = () => (
        <Switch>
            {routes.map((route, key) => {
                return <PrivateRouteHandler {...route} path={route.path} key={key}
                                     exact={route.exact} component={route.component}/>;
            })}
        </Switch>
    )

    return (
        <div className={cx("app-root", main_sidebar_close && 'sidebar-close')}>
            {isAuthenticated &&
            <React.Fragment>
                <MainHeader title={page_title}/>
                <MainSidebar/>
                <main className="main-content">
                    {renderSwitch()}
                </main>
            </React.Fragment>}

            {!isAuthenticated && renderSwitch()}

            <ToastContainer/>
        </div>
    );
}


function mapStateToProps(state) {

    return {
        isAuthenticated: state.auth.isAuthenticated,
        page_title: state.settings.page_title,
        main_sidebar_close: state.settings.main_sidebar_close
    }

}

export default connect(mapStateToProps)(withRouter(App));
