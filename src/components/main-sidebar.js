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
            title: 'Separator',
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
            path: '/consultations',
        }, {
            title: 'Item 4',
            icon: 'lightbulb outline',
            corner_icon: 'plus',
            path: '/consultations/new',
        }, {
            title: 'S4',
            divider: true
        }, {
            title: 'Users',
            icon: 'users',
            path: '/users',
        }, {
            title: 'Item 5',
            icon: 'users',
            corner_icon: 'plus',
            path: '/users/new',
        }, {
            title: 'S5',
            divider: true
        },
        {
            title: 'Item 6',
            icon: 'file image',
            path: '/media',
        }, {
            title: 'Item 7',
            icon: 'copy outline',
            child: [
                {
                    title: 'S I 1',
                    path: '/blog',
                }, {
                    title: 'S I 2',
                    path: '/blog/new',
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
                    className="rtl-scrollbar"
                    autoHideTimeout={300}
                    autoHideDuration={200}
                    style={{height: "calc(100% - 90px)"}}>
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
