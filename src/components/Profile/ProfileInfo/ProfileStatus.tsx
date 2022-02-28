import React, { ChangeEvent, useState } from 'react'

type PropsType = {
    value: string
}

function Profiletitle(props: PropsType) {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('props.value')


    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }

    const activateViewMode = () => {
        setEditMode(false);
        // props.onChange(title);
        setTitle(title)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{title}</span>
                </div>
            }
            {editMode &&
                <div >
                    <input autoFocus onBlur={activateViewMode} 
                    onChange={changeTitle}
                      value={title} />
                </div>
            }
        </div>
    )
}

export default Profiletitle