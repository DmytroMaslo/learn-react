import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogsReducer,
})

let store = createStore(reducers);

export default store