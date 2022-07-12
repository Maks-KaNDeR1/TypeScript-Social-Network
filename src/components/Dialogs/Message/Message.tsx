import s from './Message.module.css'

type PropsType = {
    id: number
    avatar: string
    name: string
    message: string
    time?: any
}


const MessageComponent: React.FC<PropsType> = ({ id, avatar, name, message, time }) => {

    const sentMessage = <div className={s.displaySent}>
        <div className={s.message} style={{ justifyContent: 'flex-end' }} >
            <div className={s.description} style={{ borderRadius: '26px 28px 0 26px' }}>
                <div className={s.nameSent}>{name}</div>
                <div className={s.textSent}>{message}</div>
                <span className={s.timeSent}>{time}</span>
            </div>

            <div className={s.angleSent} />

            <img src={avatar} alt={'avatar'} />
        </div>
    </div>

    const acceptedMessage = <div className={s.display}>
        <div className={s.message}>
            <img src={avatar} alt={'avatar'} />

            <div className={s.angle} />

            <div className={s.description}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <span className={s.time}>{time}</span>
            </div>
        </div>
    </div>

    if (id === 24185)
        return sentMessage
    else return acceptedMessage
}


export default MessageComponent

