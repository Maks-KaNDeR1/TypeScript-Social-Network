import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './AlternativeMessage.module.css'

type PropsType = {
    newMessageBody: string
    addMessage: () => void
    updateNewMessageBody: (body: string) => void
    scroll: any

}

function AlternativeMessageLocalState(props: PropsType) {

    const addMessage = () => {
        props.addMessage()
        setTimeout(() => {
            props.scroll.current.scrollIntoView({ behavior: 'smooth' })
        }, 0)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addMessage()
        }
    }

    return (
        
        <div className={s.items} >
             <input type='text'
                 placeholder=' New message...'
                    value={props.newMessageBody}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                     />
                <button onClick={addMessage} >Send</button>
        </div>
    )
}


export default AlternativeMessageLocalState
