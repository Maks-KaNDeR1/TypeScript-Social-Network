import { profileAPI } from "../api/api"
import { AppThunkType } from "./redux-store"


export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'
export const DELETE_POST = 'DELETE_POST'
export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


export type PostType = {
    id: number
    message: string
    likesCount: number
}

type PhotosType = {
    small?: string
    large?: string
    //large: any
}

type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotosType

}

export type initialStateType = {
    posts: Array<PostType>
    newPostText: string
    status: string
    profile: ProfileType | null
}



let initialState: initialStateType = {
    posts: [
        { id: 1, message: "Hi, Yo", likesCount: 23 },
        { id: 2, message: "I'm in to IT", likesCount: 12 },
        { id: 3, message: "I'", likesCount: 57 },
        { id: 4, message: "I'm a BOSS", likesCount: 23 }
    ] as Array<PostType>,
    newPostText: '',
    profile: null,
    status: ''
};



export const profileReducer = (state = initialState, action: ProfileActionsType): initialStateType => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        default:
            return state;
    }
};




type AddPostType = ReturnType<typeof addPost>
export const addPost = () => ({ type: ADD_POST } as const)


type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) =>
    ({ type: SET_USER_PROFILE, profile } as const)

type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) =>
    ({ type: SET_STATUS, status } as const)

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => ({ type: DELETE_POST, postId } as const)



export const getUserProfile = (userId: any): AppThunkType => async (dispatch) => {
    const res = await profileAPI.getUserProfie(userId)
    dispatch(setUserProfile(res.data));
}

export const getStatus = (userId: number): AppThunkType => async (dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}

export const updateStatus = (status: string): AppThunkType => async (dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photos: any): AppThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let res = await profileAPI.saveProfilePhoto(photos)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
}

export type ProfileActionsType =
    | AddPostType
    | UpdateNewPostTextType
    | SetUserProfileType
    | SetStatusType
    | DeletePostType

export default profileReducer
