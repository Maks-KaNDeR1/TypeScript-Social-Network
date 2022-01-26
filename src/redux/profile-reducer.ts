

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type profileReducerType = {
    posts: Array<PostType>
    newPostText: string
}

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: "Hi, Yo", likesCount: 23 },
        { id: 2, message: "I'm in to IT", likesCount: 12 },
        { id: 3, message: "I'", likesCount: 57 },
        { id: 4, message: "I'm a BOSS", likesCount: 23 }
    ],
    newPostText: ''
};

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            // state.newPostText = action.newText
            return state
        }
        default:
            return state;
    }
};



type ActionsType = addPostACType | updateNewPostTextACType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({ type: ADD_POST })

type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer