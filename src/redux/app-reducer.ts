import { getAuthUserData } from '../components/Login/auth-reducer';

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
    initialized: false
};


type AppReducerType = typeof initialState

export const appReducer = (state: AppReducerType = initialState, action: AppActionsType): AppReducerType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};



type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS } as const)

export const initializeApp = () => async (dispatch: any) => {

    let promise = await dispatch(getAuthUserData())
    Promise.all([promise])
    dispatch(initializedSuccess())
}

export type AppActionsType = initializedSuccessType

export default appReducer
