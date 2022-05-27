import React, { ChangeEvent, useEffect, useState } from 'react'
import s from './ProfileStatus.module.css';


type PropsType = {
    value: string
    updateStatus: (value: string) => void
}

const ProfileStatus: React.FC<PropsType> = ({value, updateStatus}) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(value)


    useEffect(() => {
        setStatus(value);
    }, [value])

    const activateEditMode = () => {
        setEditMode(true);
        setStatus(value);
    }

    const activateViewMode = () => {
        setEditMode(false);
        updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.currentTarget.value.length > 20) alert('many simbols')
		else setStatus(e.currentTarget.value)
		
    }

    return (
        <div className={s.item} >
            {!editMode &&
                <div>
                    <b> Status: </b> <span onDoubleClick={activateEditMode}>{value || "-----"}</span>
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