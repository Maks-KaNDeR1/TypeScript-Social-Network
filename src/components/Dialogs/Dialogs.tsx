
import React from 'react'
import DialogItem from './DialodsItem/DialogsItem';
import Message from './Message/Message';
import s from './Dialogs.module.css'
import { DialogsType, MessageType } from '../../redux/dialogs-reducer';
import AlternativeMessage from './AlternativeMessage/AlternativeMessage';


type PropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    addMessage: () => void
}


function Dialogs(props: PropsType) {

    const dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />
    )

    const messageElements = props.message.map(m =>
        <Message key={m.id}
            id={m.id} avatar={m.avatar} name={m.name} message={m.message} time={m.time}
        />
    )


    const scroll = React.useRef(null)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div style={{ overflow: 'auto', height: '500px' }}>
                {messageElements}
                <div ref={scroll} ></div>
            </div>
            <div />
            <div style={{ margin: '15px' }} >
                <AlternativeMessage
                    addMessage={props.addMessage}
                    scroll={scroll}
                />

            </div>
        </div>
    )
}


export default Dialogs
