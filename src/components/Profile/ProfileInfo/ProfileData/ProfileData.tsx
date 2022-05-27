import React from 'react';
import { ProfileType } from '../../../../redux/profile-reducer';
import s from './ProfileData.module.css';



type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
    return <div className={s.item}>
        <div className={s.fullName} >
            {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div className={s.contacts}> <b>Contacts</b>:
            <li><span>facebook:</span> {profile.contacts.facebook}</li>
            <li><span>github:</span> {profile.contacts.github}</li>
            <li><span>instagram:</span> {profile.contacts.instagram}</li>
            <li><span>mainLink:</span> {profile.contacts.mainLink}</li>
            <li><span>twitter:</span> {profile.contacts.twitter}</li>
            <li><span>vk:</span> {profile.contacts.vk}</li>
            <li><span>website:</span> {profile.contacts.website}</li>
            <li><span>youtube:</span> {profile.contacts.youtube}</li>
        </div>
        {isOwner && <div><button className={s.button} onClick={goToEditMode}>edit</button></div>}
    </div>
}

