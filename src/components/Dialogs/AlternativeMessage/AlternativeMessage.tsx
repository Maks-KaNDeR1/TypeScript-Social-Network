import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './AlternativeMessage.module.css'
import { FaPaperPlane, FaRegPaperPlane } from "react-icons/fa";


type PropsType = {
    addMessage: (title: string) => void
    scroll: any
}

function AlternativeMessage(props: PropsType) {

    const [title, setTitle] = useState('')

    const addMessage = () => {
	if (title.trim() !== '') {
        props.addMessage(title)
        setTitle('')
        setTimeout(() => {
            props.scroll.current.scrollIntoView({ behavior: 'smooth' })
        }, 0)
		}
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
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
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                     />
                     <FaRegPaperPlane style={{cursor: 'pointer', color: '#133d92c8', marginLeft: '5px'}}  onClick={addMessage} /> 
                     {/* <FaPaperPlane /> */}
                {/* <button onClick={addMessage} >Send</button> */}
        </div>
    )
}


export default AlternativeMessage
