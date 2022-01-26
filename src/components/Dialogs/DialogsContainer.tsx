
import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux';
import { addMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import store from '../../redux/redux-store';
import { DispatchType, RootStateType } from '../../redux/state';
import Dialogs from './Dialogs';


// function DialogsContainer (props: PropsType) {

//     const dialogs = props.dialogsPage.dialogs
//     const message = props.dialogsPage.message
//     const newMessageBody = props.dialogsPage.newMessageBody

//     const addMessage = () => {
//         store.dispatch(addMessageAC())
//     }

//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         let text = e.currentTarget.value
//         store.dispatch(updateNewMessageBodyAC(text))
//     }


//     return <Dialogs dialogs={dialogs}
//     message={message}
//     newMessageBody={newMessageBody}
//     addMessage={addMessage}
//     updateNewMessage={onChangeHandler}
//     />
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }

}


let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessageHandler: () => {
            store.dispatch(addMessageAC())
        },
        onChangeHandler: (text: string) => {
            store.dispatch(updateNewMessageBodyAC(text))
        }

    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
