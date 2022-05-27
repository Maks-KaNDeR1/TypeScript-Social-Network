import { Checkbox } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { ProfileType } from '../../../../redux/profile-reducer';
import s from './ProfileData.module.css';


type PropsType = {
    profile: ProfileType
    initialValues: any
    goToEditMode: Dispatch<SetStateAction<boolean>>
}


export const ProfileDataForm: React.FC<PropsType> = ({ profile, goToEditMode }) => {
    return (
        <div className={s.item}>

            <div className={s.fullName} >
                <input />
            </div>
            <div>
                <b>Looking for a job</b>: <Checkbox style={{height: '16px', color: '#376e91'}} />
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>:  <input />
                </div>
            }
            <div>
                <b>About me</b>:  <input style={{marginLeft: '10px', height: '15px'}} />
            </div>
            <div className={s.contacts} > <b>Contacts</b>:   
                <li><span>facebook:</span> <input /></li>
                <li><span>github:</span> <input /></li>
                <li><span>instagram:</span>  <input /></li>
                <li><span>mainLink:</span>  <input /></li>
                <li><span>twitter:</span> <input /></li>
                <li><span>vk:</span> <input /></li>
                <li><span>website:</span>  <input /></li>
                <li><span>youtube:</span> <input /></li>
            </div>
            <div><button className={s.button} onClick={() => goToEditMode(false)}>save</button></div>
        </div>
    )
}


