
import React, { ChangeEvent } from 'react'
import { DialogsType, MessageType } from '../../redux/dialogs-reducer';
import DialogItem from './DialodsItem/DialogsItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';

type PropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
    addMessage: () => void
    updateNewMessage: (e: ChangeEvent<HTMLInputElement>) => void

}


function Dialogs(props: PropsType) {

    const dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />
    )

    const messageElements = props.message.map(m =>
        <Message message={m.message} key={m.id} />
    )

  
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
                        onChange={props.updateNewMessage} />
                    <button onClick={props.addMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs
