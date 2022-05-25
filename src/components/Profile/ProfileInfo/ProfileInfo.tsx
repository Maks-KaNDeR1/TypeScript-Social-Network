import React, { ChangeEvent, RefObject, useRef } from 'react';
import { ProfileType } from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

type PropsType = {
    profile: ProfileType
    updateStatus: (value: string) => void
    status: string
    isOwner: boolean
    savePhoto: (file: any) => void
}


const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            props.savePhoto(e.target.files[0]);
        }
    }

    // const inputElement = useRef<HTMLInputElement | null>(null);

 const inRef = React.createRef<HTMLInputElement>();

    // <FaPaperclip />

return (
    <div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto} className={s.userPhoto} alt='avatar' />
                {
                    props.isOwner && <div> <input ref={inRef} type='file'
                        accept=".jpg, .jpeg, .png"
                        style={{display: 'none'}}
                        onChange={onMainPhotoSelected} />
                        <button className={s.button} onClick={() => inRef && inRef.current?.click()} > add photo</button>
                        </div>
                }
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <ProfileStatus updateStatus={props.updateStatus} value={props.status} />
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }

            <b>About me</b>: {props.profile.aboutMe}
            <p><b>Contacts: </b></p>
            <ul>
                <li>{props.profile.contacts.facebook}</li>
                <li>{props.profile.contacts.github}</li>
                <li>{props.profile.contacts.instagram}</li>
                <li>{props.profile.contacts.mainLink}</li>
                <li>{props.profile.contacts.twitter}</li>
                <li>{props.profile.contacts.vk}</li>
                <li>{props.profile.contacts.website}</li>
                <li>{props.profile.contacts.youtube}</li>
            </ul>
        </div>
    </div>
)
}

export default ProfileInfo