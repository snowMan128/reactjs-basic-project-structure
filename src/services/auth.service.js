import * as axios from "axios";
import {appConstants} from "../constants/app.constants";
import SimpleCrypto from "simple-crypto-js";

let simpleCrypto = new SimpleCrypto('jsdWEnmDFdl4sd02ds34SDF2Dsd4fmk34sdf5jhs5d5sdfsdfbx5zsdSDSsdfsdSdf5d7fcsDFSF');

// Axios defualt headers setup
axios.defaults.headers.common['Authorization'] = getToken();
axios.defaults.headers.common['Content-Type'] = 'application/json';

function login(username, password) {
    return axios({
        method: 'post',
        url: appConstants.PUBLIC_URL + '/auth/admins/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username,
            password
        }
    });
}


function isAuthenticated() {
    let user = getLocalCryptoItem(appConstants.AUTH_USER_KEY);
    let token = getLocalCryptoItem(appConstants.AUTH_TOKEN_KEY);

    return !!(user && token);
}

function getToken() {
    let token = getLocalCryptoItem(appConstants.AUTH_TOKEN_KEY)

    if (!token)
        return null;

    return 'Bearer ' + token
}

function getUser() {
    let user = getLocalCryptoItem(appConstants.AUTH_USER_KEY)
    let token = getLocalCryptoItem(appConstants.AUTH_TOKEN_KEY)

    if (user && token)
        return JSON.parse(user);

    return '';
}

function logout() {
    localStorage.removeItem(appConstants.AUTH_USER_KEY);
    localStorage.removeItem(appConstants.AUTH_TOKEN_KEY);
    localStorage.removeItem(appConstants.AUTH_REFRESH_TOKEN_KEY);
    return true
}

function register(data) {
    return axios({
        method: 'post',
        url: appConstants.BASE_URL + '/auth/admins/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    });
}

function setLocalCryptoItem(key, value) {

    try {
        localStorage.setItem(key, simpleCrypto.encrypt(value))

        return true
    } catch (e) {
        return false;
    }
}

function getLocalCryptoItem(key) {
    try {
        let data = localStorage.getItem(key)

        return data ? simpleCrypto.decrypt(data) : null;
    } catch (e) {
        return null;
    }

}

export const authService = {
    login,
    logout,
    isAuthenticated,
    getUser,
    register,
    getToken,
    setLocalCryptoItem,
    getLocalCryptoItem,
};