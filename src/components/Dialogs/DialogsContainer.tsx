
import React, { ChangeEvent } from 'react'
import { addMessageAC, DialogsReducerType, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import store from '../../redux/redux-store';
import Dialogs from './Dialogs';

type PropsType = {
    dialogsPage: DialogsReducerType
}


function DialogsContainer (props: PropsType) {

    const dialogs = props.dialogsPage.dialogs
    const message = props.dialogsPage.message
    const newMessageBody = props.dialogsPage.newMessageBody
    
    const addMessage = () => {
        store.dispatch(addMessageAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        store.dispatch(updateNewMessageBodyAC(text))
    }


    return <Dialogs dialogs={dialogs}
    message={message}
    newMessageBody={newMessageBody}
    addMessage={addMessage}
    updateNewMessage={onChangeHandler}

    />
}


export default DialogsContainer
