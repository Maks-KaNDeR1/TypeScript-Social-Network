import { authAPI } from "../api/api";
import { AppThunkType } from "./redux-store";


export const SET_USER_DATA = 'SET_USER_DATA'



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export type authReducerType ={
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const authReducer = (state: authReducerType = initialState, action: AuthActionsType): authReducerType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
};





type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) =>
({ type: SET_USER_DATA, data: { id, email, login } } as const)


export const getAuthUserData = (): AppThunkType => (dispatch) => {
    return authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
    

    export type AuthActionsType = setAuthUserDataType


    export default authReducer
    