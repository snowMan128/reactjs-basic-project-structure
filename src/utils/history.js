import * as browserHistory from 'history'
import {store} from "./store";
import {settingsActions} from "../actions/settings.actions";

const createHistory = browserHistory.createBrowserHistory

const history = createHistory();
history.listen(function (ev) {
    store.dispatch(settingsActions.toggleMainMenu(false))
});

export {history};