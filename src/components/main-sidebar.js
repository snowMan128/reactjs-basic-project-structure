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
            title: 'آیتم یک',
            icon: 'th',
            path: '/',
        }, {
            title: 'جدا کننده',
            divider: true
        }, {
            title: 'رزومه‌ها',
            icon: 'users',
            path: '/resumes',
        }, {
            title: 'کاریابی',
            divider: true
        }, {
            title: 'فرصت‌های شغلی',
            icon: 'users',
            path: '/jobs',
        }, {
            title: 'افزودن فرصت جدید',
            icon: 'users',
            path: '/jobs/new',
        }, {
            title: 'مشاوره',
            divider: true
        }, {
            title: 'درخواست‌های مشاوره',
            icon: 'lightbulb outline',
            path: '/consultations',
        }, {
            title: 'ثبت مشاوره جدید',
            icon: 'lightbulb outline',
            corner_icon: 'plus',
            path: '/consultations/new',
        }, {
            title: 'اعضا',
            divider: true
        }, {
            title: 'کاربران',
            icon: 'users',
            path: '/users',
        }, {
            title: 'افزودن کاربر جدید',
            icon: 'users',
            corner_icon: 'plus',
            path: '/users/new',
        }, {
            title: 'مدیریت محتوا',
            divider: true
        },
        {
            title: 'مدیا و فایل‌ها',
            icon: 'file image',
            path: '/media',
        }, {
            title: 'بلاگ',
            icon: 'copy outline',
            child: [
                {
                    title: 'مشاهده مطالب',
                    path: '/blog',
                }, {
                    title: 'افزودن مطلب جدید',
                    path: '/blog/new',
                }, {
                    title: 'نظرات',
                    path: '/blog/comments',
                }, {
                    title: 'دسته بندی‌ها',
                    path: '/blog/categories',
                }
            ]
        }, {
            title: 'برگه‌ها',
            icon: 'copy outline',
            child: [
                {
                    title: 'مشاهده همه',
                    path: '/pages',
                }, {
                    title: 'افزودن برگه جدید',
                    path: '/pages/new',
                },
            ]
        }, {
            title: 'برگه‌های ایستا',
            icon: 'copy outline',
            child: [
                {
                    title: 'درباره ما',
                    path: '/static/about',
                },
                {
                    title: 'تماس با ما',
                    path: '/static/contact',
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
