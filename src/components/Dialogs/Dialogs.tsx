
import React, { ChangeEvent } from 'react'
import { DialogsType, MessageType } from '../../redux/dialogs-reducer';
import DialogItem from './DialodsItem/DialogsItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';

type PropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
    addMessageHandler: () => void
    updateNewMessage: (text: string) => void

}


function Dialogs(props: PropsType) {

    const dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />
    )

    const messageElements = props.message.map(m =>
        <Message message={m.message} key={m.id} />
    )

    const addMessage = () => {
        props.addMessageHandler()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessage(text)
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
