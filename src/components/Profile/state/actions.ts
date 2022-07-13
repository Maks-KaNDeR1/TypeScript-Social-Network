import { ProfileType } from "./profile-reducer"

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'
export const DELETE_POST = 'DELETE_POST'
export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'



export const addPost = () => ({ type: ADD_POST } as const)

export const updateNewPostText = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)

export const setUserProfile = (profile: ProfileType) =>
    ({ type: SET_USER_PROFILE, profile } as const)

export const setStatus = (status: string) =>
    ({ type: SET_STATUS, status } as const)

export const deletePost = (postId: number) =>
    ({ type: DELETE_POST, postId } as const)


export type ProfileActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>