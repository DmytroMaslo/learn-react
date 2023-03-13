import { combineReducers, createStore,applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import newsReducer from "./news-reducer";
import appReducer from "./app-reducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogsReducer,
    //sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    newsPage:newsReducer,
    app:appReducer,
})

let store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store