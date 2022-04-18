import { getAuthUserData } from './auth-reducer';

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

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export type AppActionsType = initializedSuccessType

export default appReducer
