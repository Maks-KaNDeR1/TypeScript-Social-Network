

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    profile: null
};

export type initialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
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
        default:
            return state;
    }
};



type ActionsType =
    AddPostType |
    UpdateNewPostTextType |
    SetUserProfileType

type AddPostType = ReturnType<typeof addPost>
export const addPost = () => ({ type: ADD_POST } as const)

type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) =>
    ({ type: SET_USER_PROFILE, profile } as const)


export default profileReducer
