

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

export type DialogsType = {
    id: number
    name: string
    src: string
}

export type MessageType = {
    id: number
    avatar: string
    name: string
    message: string
    time: any
}

export type DialogsReducerType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}

let initialState: DialogsReducerType = {
    dialogs: [
        { id: 1, name: 'Chat Samurais', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLFYUQ95QJAS0zyVxBrUHL9-np7kR4ueKXYpnAOBCBczReCLa6G4nheqPrt6naYSO2Pw&usqp=CAU' },
        { id: 2, name: 'Sonechka', src: 'https://sun2-10.userapi.com/s/v1/if1/w1y1anZFpf-CNhV-lyM8U6QCcnKkY164nwL0HkaM1FCU6CxDm4dQ3F0i9yR8ib5JCojY2P7X.jpg?size=100x0&quality=96&crop=58,0,339,339&ava=1' },
        { id: 3, name: 'Maks', src: 'https://sun2-4.userapi.com/s/v1/ig2/tmGqC7l6DkVdw8p1o8raCVmvPtRmFeWjVODUXOn8ClIXSBpLUKtcascbdMK0i0qBhTs0aXgP7qSj-evbmXNdcL9X.jpg?size=100x0&quality=96&crop=26,6,1580,1580&ava=1' },
        { id: 4, name: 'Dimych', src: 'https://sun2-4.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1' },
        { id: 5, name: 'Masha', src: 'https://sun2-3.userapi.com/s/v1/ig1/ZEoKnBuJ0WePJx9izTmq4QNH657mCi5IPIfuxZJGyaz-kWOF-CrCBqKT6FRZHfZ16xZsqYT7.jpg?size=100x0&quality=96&crop=160,0,759,759&ava=1' },
        { id: 6, name: 'Ulya', src: 'https://sun2-3.userapi.com/s/v1/ig2/lxJkYCHND2QJIj6Y6CiLOIZn64fKd1lp2_pkoHGcLhi5ugP7zsKEcKpDSDVkWFsVWk_9JWws4VdRK05CIAZns7-j.jpg?size=100x0&quality=96&crop=0,274,1215,1215&ava=1' },
        { id: 7, name: 'Ustina', src: 'https://sun9-59.userapi.com/impf/Xr5HIhSHG2Xn-b6EXFY0x1KMNfa5VpmofbNzlQ/cS6GLKimqdg.jpg?size=1080x1080&quality=96&sign=e702e7ebd20a8cddfbebd77957c00ecc&type=album' },
        { id: 8, name: 'Sasha', src: 'https://sun2-9.userapi.com/s/v1/ig2/k-NYQ6bwT9zwVHoWsY9mEW35tf56gqKIZSogiC5qcE32xOlTKCMvn3poYzyhEn0fKrStu2jhWt6di522b1IjrWHb.jpg?size=100x0&quality=96&crop=12,12,200,200&ava=1' },
        { id: 9, name: 'Vova', src: 'https://sun2-4.userapi.com/s/v1/ig1/X2AsqRo-dhkjrmbPk2fwjAJjQipXwXvaGtQFw42mSpDrZUYK5pR5AiM6HUwJktqkET6WctPB.jpg?size=100x0&quality=96&crop=615,256,588,588&ava=1' }
    ] as Array<DialogsType>,
    message: [
        {
            id: 1, avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Sasha', message: 'Hello, my friends', time: '22:00'
        },
        {
            id: 24185, avatar: 'https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg',
            name: 'Maksim', message: 'Hi all', time: '22:07'
        },
        {
            id: 3, avatar: 'https://i.pinimg.com/564x/56/2f/9c/562f9cbde8be047a6b3ca16927cbc75b.jpg',
            name: 'Sonya', message: 'yo yo yo', time: '22:15'
        },
        {
            id: 4, avatar: 'https://top-tok.ru/wp-content/uploads/e8a52fc5-620c-4d7c-8f34-ddd8f605f95a.jpg',
            name: 'Natali', message: 'How a you?', time: '22:17'
        },
        {
            id: 24185, avatar: 'https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg',
            name: 'Maksim', message: 'Everything is fine', time: '22:18'
        },
        {
            id: 6, avatar: 'https://i.pinimg.com/originals/38/20/44/382044ab16b8772d62a6043dc202bd86.jpg',
            name: 'Galya', message: 'What do you do', time: '22:19'
        },
        {
            id: 7, avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642409371_29-papik-pro-p-gacha-stikeri-31.jpg',
            name: 'Dima', message: 'I went out for a walk', time: '22:19'
        },
        {
            id: 8, avatar: 'https://yt3.ggpht.com/a/AATXAJwg1JVXn5R_VJH_tSFHvGrBbwGEfEW0yDUBAgDkag=s900-c-k-c0xffffffff-no-rj-mo',
            name: 'Alina', message: 'I will sleep', time: '22:23'
        }
    ] as Array<MessageType>,
}

export const dialogsReducer = (state: DialogsReducerType = initialState, action: DialogsActionsType): DialogsReducerType => {
    switch (action.type) {
        case ADD_MESSAGE: {

            const rand = Math.floor(Math.random() * state.message.length)
            let min = new Date().getMinutes()

            let newMessage: MessageType = {
                id: 9,
                avatar: state.message[rand].avatar,
                name: state.message[rand].name,
                message: action.title,
                time: '15 :' + min

            }
            return {
                ...state,
                message: [...state.message, newMessage],
            }
        }
        default:
            return state;
    }
};



type addMessageType = ReturnType<typeof addMessage>
export const addMessage = (title: string) => ({ type: ADD_MESSAGE, title } as const)


export type DialogsActionsType = addMessageType


export default dialogsReducer