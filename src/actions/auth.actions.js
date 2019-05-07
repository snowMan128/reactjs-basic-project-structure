import {authConstants, appConstants} from "../constants";
import {authService} from "../services/auth.service";
import {history} from "../utils";
import {toasts} from "../utils/toasts";
import * as axios from "axios";

export const authActions = {
    loginAttempt,
    logout,
    setLoggedIn
};

function loginAttempt(email, password, submitBtnRef = null) {
    return dispatch => {

        authService.login(email, password)
            .then(function (response) {

                if (response.data.success && response.data.token) {
                    let mustSave = {
                        admin: response.data.admin,
                        token: response.data.token.token,
                        refreshToken: response.data.token.refreshToken,
                    };

                    authService.setLocalCryptoItem(appConstants.AUTH_TOKEN_KEY, mustSave.token)
                    authService.setLocalCryptoItem(appConstants.AUTH_REFRESH_TOKEN_KEY, mustSave.refreshToken)
                    authService.setLocalCryptoItem(appConstants.AUTH_USER_KEY, mustSave.admin)

                    dispatch({
                        type: authConstants.LOGIN_SUCCESS,
                        payload: {
                            admin: mustSave.admin,
                            role: parseInt(mustSave.admin.access) || 10
                        }
                    });

                    axios.defaults.headers.common['Authorization'] = authService.getToken();
                    axios.defaults.headers.common['Content-Type'] = 'application/json';


                    toasts.success('ورود موفق!');
                    history.push('/');
                } else {
                    if (response.status === 200)
                        toasts.error('این حساب کاربری فعال نیست!');
                    else
                        toasts.error('مدیری با این مشخصات وجود ندارد!');
                    submitBtnRef.classList.remove('loading')

                }


            })
            .catch(err => {
                submitBtnRef.classList.remove('loading')
                console.log(err);
                if (err.response && err.response.status === 401)
                    toasts.error('مدیری با این مشخصات وجود ندارد!');
                else
                    toasts.error('خطای فنی در ورود به حساب! لطفا با پشتیبانی تماس بگیرید.');

            })
    }
}

function logout() {
    return dispatch => {

        authService.logout();

        dispatch({
            type: authConstants.SET_LOGGED_IN_STATUS,
        });

        history.push('/login');
    }
}

function setLoggedIn(isAuthenticated) {
    return dispatch => {
        dispatch({
            type: authConstants.SET_LOGGED_IN_STATUS,
            payload: isAuthenticated
        })
    }
}
