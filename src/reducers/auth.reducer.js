import {authConstants} from "../constants/redux.constants";

const initialState = {
    role: undefined,
    isAuthenticated: false,
    admin: null
};

export function auth(state = initialState, action) {

    switch (action.type) {
        case authConstants.SET_LOGGED_IN_STATUS:
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                admin: action.payload.admin,
                role: action.payload.role
            };
        case authConstants.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                admin: null,
                role: null
            };
        default:
            return state;
    }
}