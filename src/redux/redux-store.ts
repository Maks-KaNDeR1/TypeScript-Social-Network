import { AuthActionsType, authReducer } from '../components/Login/auth-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer, { DialogsActionsType } from "../components/Dialogs/dialogs-reducer";
import profileReducer, { ProfileActionsType } from "../components/Profile/profile-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer, { AppActionsType } from './app-reducer';
import usersReducer from '../components/Users/state/users-reducer';
import chatReducer from '../pages/Chat/chat-reducer';


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AllActionsType =
    AppActionsType
    | DialogsActionsType
    | ProfileActionsType
    | AuthActionsType


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))