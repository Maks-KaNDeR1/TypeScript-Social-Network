import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-reducer';

type PropsType = {
  profile: ProfileType
  status: string
  updateStatus: (value: string) => void
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => void
  isOwner: boolean
}


const Profile: React.FC<PropsType>= ({profile, status,  updateStatus,  savePhoto, saveProfile, isOwner}) => {

  return (
    <div className={styles.content}>
      <ProfileInfo savePhoto={savePhoto} saveProfile={saveProfile} isOwner={isOwner} updateStatus={updateStatus} status={status} profile={profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


