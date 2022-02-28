
import React, { ChangeEvent } from 'react'
import DialogItem from './DialodsItem/DialogsItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css'
import { DialogsType, MessageType } from '../../redux/dialogs-reducer';

type PropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
    addMessage: () => void
    updateNewMessageBody: (body: string) => void
}


function Dialogs(props: PropsType) {
    
    const dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />
    )

    const messageElements = props.message.map(m =>
        <Message message={m.message} key={m.id} />
    )

    const addMessage = () => {
        props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
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
                        value={props.newMessageBody}
                        onChange={onChangeHandler} />
                    <button onClick={addMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs
