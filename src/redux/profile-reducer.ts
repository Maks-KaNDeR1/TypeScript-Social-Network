import { profileAPI } from "../api/api"
import { AppThunkType } from "./redux-store"


export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'
export const DELETE_POST = 'DELETE_POST'


export type PostType = {
    id: number
    message: string
    likesCount: number
}

type PhotosType = {
    small: string | null
    // large: string | null
    large: any
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

// export type profileReducerType = {
//     posts: Array<PostType>
//     newPostText: string
//     profile: ProfileType
// }

let initialState = {
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


export type initialStateType = typeof initialState

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
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
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
export const setUserProfile = (profile: any) =>
    ({ type: SET_USER_PROFILE, profile } as const)

type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) =>
    ({ type: SET_STATUS, status } as const)

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => ({ type: DELETE_POST, postId } as const)




export const getUserProfile = (userId: number): AppThunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfie(userId)
    dispatch(setUserProfile(data));
}

export const getStatus = (userId: number): AppThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status: string): AppThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export type ProfileActionsType =
    | AddPostType
    | UpdateNewPostTextType
    | SetUserProfileType
    | SetStatusType
    | DeletePostType


export default profileReducer
