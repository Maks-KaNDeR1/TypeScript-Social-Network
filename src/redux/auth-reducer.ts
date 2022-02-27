import { authAPI } from "../api/api";


export const SET_USER_DATA = 'SET_USER_DATA'



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export type authReducerType = typeof initialState

export const authReducer = (state: authReducerType = initialState, action: ActionsType) => {
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



type ActionsType = setAuthUserDataType


type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) =>
    ({ type: SET_USER_DATA, data: { id, email, login } } as const)


export const login = () => (dispatch: any) => {
    authAPI.login()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export default authReducer
