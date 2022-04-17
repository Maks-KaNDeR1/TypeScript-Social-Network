import React, { ChangeEvent, useEffect, useState } from 'react'

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
        debugger
        props.updateStatus(status);
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b> Status: </b> <span onDoubleClick={activateEditMode}>{props.value || "-----"}</span>
                </div>
            }
            {editMode &&
                <div >
                    <input autoFocus onBlur={activateViewMode} 
                    onChange={changeTitle}
                      value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus