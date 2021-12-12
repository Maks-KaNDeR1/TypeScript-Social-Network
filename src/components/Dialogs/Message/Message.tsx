import styles from './Message.module.css'

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {

    return <div className={styles.display}>
              <div>
                 <div className={styles.text}>{props.message}</div>
              </div>
            </div>
}


export default Message

