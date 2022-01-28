
type DialogsType = {
    id: number
    name: string
    src: string
}

type MessageType = {
    id: number
    message: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'


type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    _callSubscriber: () => void
    dispatch: DispatchType
}

type ActionsType = AddPostActionType | UpdateNewPostTextActionType
    | AddMessageActionType | UpdateNewMessageBodyActionType

type DispatchType = (action: ActionsType) => void


type AddPostActionType = {
    type: 'ADD_POST'
    PostText: string
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD_MESSAGE'
}
type UpdateNewMessageBodyActionType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    newMessage: string
}

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, Yo", likesCount: 23 },
                { id: 2, message: "I'm in to IT", likesCount: 12 },
                { id: 3, message: "I'", likesCount: 57 },
                { id: 4, message: "I'm a BOSS", likesCount: 23 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sofiyka', src: 'https://sun2-10.userapi.com/s/v1/if1/w1y1anZFpf-CNhV-lyM8U6QCcnKkY164nwL0HkaM1FCU6CxDm4dQ3F0i9yR8ib5JCojY2P7X.jpg?size=100x0&quality=96&crop=58,0,339,339&ava=1' },
                { id: 2, name: 'Maks', src: 'https://sun2-4.userapi.com/s/v1/ig2/tmGqC7l6DkVdw8p1o8raCVmvPtRmFeWjVODUXOn8ClIXSBpLUKtcascbdMK0i0qBhTs0aXgP7qSj-evbmXNdcL9X.jpg?size=100x0&quality=96&crop=26,6,1580,1580&ava=1' },
                { id: 3, name: 'Dimych', src: 'https://sun2-4.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1' },
                { id: 4, name: 'Masha', src: 'https://sun2-3.userapi.com/s/v1/ig1/ZEoKnBuJ0WePJx9izTmq4QNH657mCi5IPIfuxZJGyaz-kWOF-CrCBqKT6FRZHfZ16xZsqYT7.jpg?size=100x0&quality=96&crop=160,0,759,759&ava=1' },
                { id: 5, name: 'Ulya', src: 'https://sun2-3.userapi.com/s/v1/ig2/lxJkYCHND2QJIj6Y6CiLOIZn64fKd1lp2_pkoHGcLhi5ugP7zsKEcKpDSDVkWFsVWk_9JWws4VdRK05CIAZns7-j.jpg?size=100x0&quality=96&crop=0,274,1215,1215&ava=1' },
                { id: 6, name: 'Ustina', src: 'https://sun9-59.userapi.com/impf/Xr5HIhSHG2Xn-b6EXFY0x1KMNfa5VpmofbNzlQ/cS6GLKimqdg.jpg?size=1080x1080&quality=96&sign=e702e7ebd20a8cddfbebd77957c00ecc&type=album' },
                { id: 7, name: 'Sasha', src: 'https://sun2-9.userapi.com/s/v1/ig2/k-NYQ6bwT9zwVHoWsY9mEW35tf56gqKIZSogiC5qcE32xOlTKCMvn3poYzyhEn0fKrStu2jhWt6di522b1IjrWHb.jpg?size=100x0&quality=96&crop=12,12,200,200&ava=1' },
                { id: 8, name: 'Vova', src: 'https://sun2-4.userapi.com/s/v1/ig1/X2AsqRo-dhkjrmbPk2fwjAJjQipXwXvaGtQFw42mSpDrZUYK5pR5AiM6HUwJktqkET6WctPB.jpg?size=100x0&quality=96&crop=615,256,588,588&ava=1' }
            ],
            message: [
                { id: 1, message: 'Hy, I am Maks' },
                { id: 2, message: 'Hoy are you' },
                { id: 3, message: 'How is your it-kamasutra?' },
                { id: 4, message: 'Yo' },
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;  // observer
    },
    addPost(PostText: string) {
        const newPost = {
            id: 5,
            message: PostText,
            likesCount: 18
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },

    dispatch(action: ActionsType) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 18
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.message.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessage
            this._callSubscriber()
        }
    }
}

const addPostActionCreator = () => {
    return { type: ADD_POST }
}
const updateNewPostTextActionCreator = (text: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}
const updateNewMessageBodyActionCreator = (text: string) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, newMessage: text }
}

store