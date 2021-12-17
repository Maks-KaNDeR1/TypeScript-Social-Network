
import React from 'react'
import state from '../../redux/state';
import DialogItem from './DialodsItem/DialogsItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs() {

    const dialogs = state.dialogsPage.dialogs
    const message = state.dialogsPage.message

    const dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src}/>
        )

        const messageElements = message.map(m =>
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
