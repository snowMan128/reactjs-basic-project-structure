import {combineReducers} from "redux";
import {settings} from "./settings.reducer";
import {auth} from "./auth.reducer";

const rootReducer = combineReducers({
    settings,
    auth
});

export default rootReducer;