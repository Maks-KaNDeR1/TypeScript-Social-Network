import React, { ChangeEvent, useState } from 'react';
import { ProfileType } from '../state/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userPhoto from '../../../assets/images/user.png';
import { ProfileDataForm } from './ProfileData/ProfileDataForm';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ProfileData } from './ProfileData/ProfileData';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../redux/redux-store';
import { UserType } from '../../Users/state/users-reducer';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (value: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
    users: UserType[]
    followingInProgress: []
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const ProfileInfo: React.FC<PropsType> = (
    {
        profile,
        status,
        updateStatus,
        savePhoto,
        saveProfile,
        isOwner,
        users,
        followingInProgress,
        follow,
        unfollow
    }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            savePhoto(e.target.files[0]);
        }
    }

    const inRef = React.createRef<HTMLInputElement>();

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profile}>
                    <img src={profile.photos.large
                        ? profile.photos.large
                        : userPhoto} className={s.userPhoto} alt='avatar' />
                    {
                        isOwner && <div> <input ref={inRef} type='file'
                            accept=".jpg, .jpeg, .png"
                            style={{ display: 'none' }}
                            onChange={onMainPhotoSelected} />
                            <AddPhotoAlternateIcon className={s.button} style={{ padding: '2px 3px', color: 'rgb(179 243 253)', transition: '.5s' }}
                                onClick={() => inRef && inRef.current?.click()}
                            />
                        </div>
                    }
                    <div>
                        <ProfileStatus updateStatus={updateStatus} value={status} />
                    </div>
                    {/* {
                        users.map(u => u.followed
                            ? <button className={s.gradientButton} disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => { follow(u.id) }}
                            > Unfollow </button>
                            : <button className={s.gradientButton} disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => { unfollow(u.id) }}
                            > Follow </button>
                        )
                    } */}
                </div>
                <span ></span>
                <div className={s.description}  >
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} goToEditMode={setEditMode} />
                        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
                </div>
            </div>
        </div>
    )
}



export default ProfileInfo