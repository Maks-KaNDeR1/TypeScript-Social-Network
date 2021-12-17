
import React from 'react'
import state from '../../redux/state';
import DialogItem from './DialodsItem/DialogsItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs() {

    let dialogs = state.dialogsPage.dialogs
    let message = state.dialogsPage.message

    let dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src}/>
        )

    let messageElements = message.map(m =>
        <Message message={m.message} key={m.id}/>
        )


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}


export default Dialogs
