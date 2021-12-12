
import React from 'react'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialodsItem/DialogsItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';


type DialogsType = {
    id: number
    name: string
    src: string
}

type MessageType = {
    id: number
    message: string
}


let dialogsData = [
    { id: 1, name: 'Sofiyka', src: 'https://sun2-10.userapi.com/s/v1/if1/w1y1anZFpf-CNhV-lyM8U6QCcnKkY164nwL0HkaM1FCU6CxDm4dQ3F0i9yR8ib5JCojY2P7X.jpg?size=100x0&quality=96&crop=58,0,339,339&ava=1' },
    { id: 2, name: 'Maks', src: 'https://sun2-4.userapi.com/s/v1/ig2/tmGqC7l6DkVdw8p1o8raCVmvPtRmFeWjVODUXOn8ClIXSBpLUKtcascbdMK0i0qBhTs0aXgP7qSj-evbmXNdcL9X.jpg?size=100x0&quality=96&crop=26,6,1580,1580&ava=1' },
    { id: 3, name: 'Dimych', src: 'https://sun2-4.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1' },
    { id: 4, name: 'Masha', src: 'https://sun2-3.userapi.com/s/v1/ig1/ZEoKnBuJ0WePJx9izTmq4QNH657mCi5IPIfuxZJGyaz-kWOF-CrCBqKT6FRZHfZ16xZsqYT7.jpg?size=100x0&quality=96&crop=160,0,759,759&ava=1' },
    { id: 5, name: 'Ulya', src: 'https://sun2-3.userapi.com/s/v1/ig2/lxJkYCHND2QJIj6Y6CiLOIZn64fKd1lp2_pkoHGcLhi5ugP7zsKEcKpDSDVkWFsVWk_9JWws4VdRK05CIAZns7-j.jpg?size=100x0&quality=96&crop=0,274,1215,1215&ava=1' },
    { id: 6, name: 'Ustina', src: 'https://sun9-59.userapi.com/impf/Xr5HIhSHG2Xn-b6EXFY0x1KMNfa5VpmofbNzlQ/cS6GLKimqdg.jpg?size=1080x1080&quality=96&sign=e702e7ebd20a8cddfbebd77957c00ecc&type=album' },
    { id: 7, name: 'Sasha', src: 'https://sun2-9.userapi.com/s/v1/ig2/k-NYQ6bwT9zwVHoWsY9mEW35tf56gqKIZSogiC5qcE32xOlTKCMvn3poYzyhEn0fKrStu2jhWt6di522b1IjrWHb.jpg?size=100x0&quality=96&crop=12,12,200,200&ava=1' },
    { id: 8, name: 'Vova', src: 'https://sun2-4.userapi.com/s/v1/ig1/X2AsqRo-dhkjrmbPk2fwjAJjQipXwXvaGtQFw42mSpDrZUYK5pR5AiM6HUwJktqkET6WctPB.jpg?size=100x0&quality=96&crop=615,256,588,588&ava=1' }
] as Array<DialogsType>

let messagesData = [
    { id: 1, message: 'Hy, I am Maks' },
    { id: 2, message: 'Hoy are you' },
    { id: 3, message: 'How is your it-kamasutra?' },
    { id: 4, message: 'Yo' },
] as Array<MessageType>


function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} src={dialogsData[0].src} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} src={dialogsData[1].src} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} src={dialogsData[2].src} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} src={dialogsData[3].src} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} src={dialogsData[4].src} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} src={dialogsData[5].src} />
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} src={dialogsData[6].src} />
                <DialogItem name={dialogsData[7].name} id={dialogsData[7].id} src={dialogsData[7].src} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}



export default Dialogs
