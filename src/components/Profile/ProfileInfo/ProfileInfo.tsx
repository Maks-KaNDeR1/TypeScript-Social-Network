import React from 'react';
import { ProfileType } from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

type PropsType = {
    profile: ProfileType
}


const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {/* <img src='https://eksmo.ru/upload/iblock/523/rick_morty_l_min.jpg' alt='EEE'/> */}
                <img src={props.profile.photos.large} alt='avatar' />
                <div>
                    <b>Full name</b>: {props.profile.fullName}
                </div>
                <div>
                    <ProfileStatus value='Ya Krut' />
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