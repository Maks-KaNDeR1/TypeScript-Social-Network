
import React, { ChangeEvent, useState } from 'react'
import store, { ADD_MESSAGE, DialogsPageType, UPDATE_NEW_MESSAGE_BODY } from '../../redux/state';
import DialogItem from './DialodsItem/DialogsItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';

type PropsType = {
    dialogsPage: DialogsPageType
}


function Dialogs(props: PropsType) {

    const dialogs = props.dialogsPage.dialogs
    const message = props.dialogsPage.message
    const newMessageBody = props.dialogsPage.newMessageBody
    
    const dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />
    )

    const messageElements = message.map(m =>
        <Message message={m.message} key={m.id} />
    )


    const addMessage = () => {
        store.dispatch({ type: ADD_MESSAGE, newMessage: newMessageBody })
    }


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        store.dispatch({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text })
    }



    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div>
                    <input
                        value={newMessageBody}
                        onChange={onChangeHandler} />
                    <button onClick={addMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs
