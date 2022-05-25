import React, { ChangeEvent, useEffect, useState } from 'react'
import s from './ProfileStatus.module.css';


type PropsType = {
    value: string
    updateStatus: (value: string) => void
}

function ProfileStatus(props: PropsType) {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.value)


    useEffect(() => {
        setStatus(props.value);
    }, [props.value])

    const activateEditMode = () => {
        setEditMode(true);
        setStatus(props.value);
    }

    const activateViewMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.item} >
            {!editMode &&
                <div>
                    <b> Status: </b> <span onDoubleClick={activateEditMode}>{props.value || "-----"}</span>
                </div>
            }
            {editMode &&
                <div >
                    <input autoFocus onBlur={activateViewMode} 
                    onChange={onStatusChange}
                      value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus