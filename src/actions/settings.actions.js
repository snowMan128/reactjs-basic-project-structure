import {settingsConstants} from "../constants/redux.constants";

export const settingsActions = {
    toggleMainMenu,
    toggleSideMenu,
    setCurrentPageTitle
};

function toggleMainMenu(status = true) {
    return dispatch => {
        dispatch({
            type: settingsConstants.MAIN_SIDEBAR_CLOSE,
            payload: status
        })
    }
}

function toggleSideMenu(status = true) {
    return dispatch => {
        dispatch({
            type: settingsConstants.ACTIONS_MENU_OPEN,
            payload: status
        })
    }
}

function setCurrentPageTitle(title = true) {
    return dispatch => {
        dispatch({
            type: settingsConstants.SET_CURRENT_PAGE_TITLE,
            payload: title
        })
    }
}
