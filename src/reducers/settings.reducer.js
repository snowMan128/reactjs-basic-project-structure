import {settingsConstants} from "../constants/redux.constants";

const initialState = {
    actions_menu_open: false,
    main_sidebar_close: false,
    page_title: "پنل مدیریت سیدبو"
};

export function settings(state = initialState, action) {

    switch (action.type) {
        case settingsConstants.ACTIONS_MENU_OPEN:
            return {
                ...state,
                actions_menu_open: action.payload
            };
        case settingsConstants.MAIN_SIDEBAR_CLOSE:
            return {
                ...state,
                main_sidebar_close: action.payload
            };
        case settingsConstants.SET_CURRENT_PAGE_TITLE:
            return {
                ...state,
                page_title: action.payload
            };
        default:
            return state;
    }
}