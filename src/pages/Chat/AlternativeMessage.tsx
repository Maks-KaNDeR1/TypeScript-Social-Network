import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './AlternativeMessage.module.css'
import SendIcon from '@mui/icons-material/Send';

type PropsType = {
    title: string
    setTitle: (title: string) => void
    onClickHandler: () => void
    disabled: boolean
    scroll?: any
}

const AlternativeMessage: React.FC<PropsType> = (
    { title, setTitle, onClickHandler, disabled, scroll }) => {


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onClickHandler()
        }
    }

    return (

        <div className={s.items} >
            <div>

                <input type='text'
                    placeholder=' New message...'
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
            </div>
            <div>

                <button disabled={disabled}
                    style={{ cursor: 'pointer', marginBottom: '-6px' }}
                    onClick={onClickHandler}
                ><SendIcon /></button>
            </div>
        </div>
    )
}


export default AlternativeMessage
