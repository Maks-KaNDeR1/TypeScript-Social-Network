import { authReducer } from './auth-reducer';
import { usersReducer } from './users-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import thunkMiddleware from 'redux-thunk';


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer, 
    profilePage: profileReducer ,
    usersPage: usersReducer,
    auth: authReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware) )