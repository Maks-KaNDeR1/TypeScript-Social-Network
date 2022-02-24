import { authReducer } from './auth-reducer';
import { usersReducer } from './users-reducer';
import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer, 
    profilePage: profileReducer ,
    usersPage: usersReducer,
    auth: authReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)