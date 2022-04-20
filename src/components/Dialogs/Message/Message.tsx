import s from './Message.module.css'

type PropsType = {
    id?: number
    avatar: string
    name: string
    message: string
    time: any
}




const Message = (props: PropsType) => {

    return (
        <div className={s.display}>
            <div className={s.message}>
                <img src={props.avatar} alt={'avatar'} />

                <div className={s.angle} />

                <div className={s.description}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                    <span className={s.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}


export default Message

