
import { authAPI } from "../../api/api";
import { AppThunkType } from "../../redux/redux-store";


export const SET_USER_DATA = 'SET_USER_DATA'



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export type authReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const authReducer = (state: authReducerType = initialState, action: AuthActionsType): authReducerType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, ...action.payload
            }
        }
        default:
            return state;
    }
};





type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) =>
    ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } } as const)


export const getAuthUserData = (): AppThunkType => async (dispatch) => {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) {
        let { id, email, login } = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha = false): AppThunkType => (dispatch) => {
    return authAPI.login(email, password, rememberMe, captcha)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })

}
export const logout = (): AppThunkType => (dispatch) => {
    return authAPI.logout()
        .then(res => {
            console.log('in then', res)
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}










export type AuthActionsType = setAuthUserDataType


export default authReducer
