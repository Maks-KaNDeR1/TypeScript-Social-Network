import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { ChatMessageAPIType } from '../../api/chat-api'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage, startMessagesListening, stopMessagesListening } from './chat-reducer'
import { AppRootStateType } from '../../redux/redux-store'
import AlternativeMessage from './AlternativeMessage'
import MessageComponent from '../../components/Dialogs/Message/Message'


const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()


    const status = useSelector((state: AppRootStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <>
            <Messages />
            <AddMessageForm />
        </>
    </div>
}

const Messages: React.FC<{}> = ({ }) => {
    const messages = useSelector((state: AppRootStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    return <div style={{ height: '500px', overflowY: 'auto' }} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message key={m.id} message={m} />)}
        <div ref={messagesAnchorRef}></div>
    </div>
}


const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({ message }) => {
    console.log(">>>>>>Message")
    console.log(message)
    return <MessageComponent
        id={message.userId}
        message={message.message}
        avatar={message.photo}
        name={message.userName}
    />

})


const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppRootStateType) => state.chat.status)


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <AlternativeMessage
        title={message}
        setTitle={setMessage}
        onClickHandler={sendMessageHandler}
        disabled={status !== 'ready'}

    />
}

export default ChatPage
