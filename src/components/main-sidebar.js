import React from 'react';
import {connect} from "react-redux";
import {authActions} from "../actions/auth.actions";
import {Scrollbars} from "react-custom-scrollbars";
import {settingsActions} from "../actions/settings.actions";
import {appConstants} from "../constants/app.constants";
import Navigation from "./navigation/navigation";
import cx from "classnames"

function MainSidebar({main_sidebar_close, dispatch}) {

    const menuItems = [
        {
            title: 'Item 1',
            icon: 'th',
            path: '/',
        }, {
            title: 'S1',
            divider: true
        }, {
            title: 'Item 2',
            icon: 'users',
            path: '/i2',
        }, {
            title: 'S2',
            divider: true
        },  {
            title: 'S3',
            divider: true
        }, {
            title: 'Item 3',
            icon: 'lightbulb outline',
            path: '/i3',
        }, {
            title: 'Item 4',
            icon: 'lightbulb outline',
            corner_icon: 'plus',
            path: '/i4',
        }, {
            title: 'S4',
            divider: true
        }, {
            title: 'Item 4-1',
            icon: 'users',
            path: '/i4',
        }, {
            title: 'Item 5',
            icon: 'users',
            corner_icon: 'plus',
            path: '/i5',
        }, {
            title: 'S5',
            divider: true
        },
        {
            title: 'Item 6',
            icon: 'file image',
            path: '/i6',
        }, {
            title: 'Item 7',
            icon: 'copy outline',
            child: [
                {
                    title: 'Item 7.1',
                    path: '/i71',
                }, {
                    title: 'Item 7.2',
                    path: '/i72',
                },
            ]
        },
    ]

    const toggleMainMenu = () => {
        dispatch(settingsActions.toggleMainMenu(false))
    }

    const doLogout = () => {
        dispatch(authActions.logout());
    }

    return (
        <React.Fragment>

            <aside className={cx("main-sidebar ", main_sidebar_close && 'show')}>
                <h3 className="sidebar-title">{appConstants.APP_NAME}</h3>
                <Scrollbars
                    autoHide
                    className="main-scrollbar"
                    autoHideTimeout={300}
                    autoHideDuration={200}
                    style={{height: "200px"}}>
                    <Navigation items={menuItems}/>
                </Scrollbars>
                <footer>

                </footer>
            </aside>
            <div className={"menu-overlay " + (main_sidebar_close ? 'show' : '')} onClick={toggleMainMenu}/>

        </React.Fragment>

    );

}

function mapStateToProps(state) {
    return {
        main_sidebar_close: state.settings.main_sidebar_close
    }

}

export default connect(mapStateToProps)(MainSidebar);
