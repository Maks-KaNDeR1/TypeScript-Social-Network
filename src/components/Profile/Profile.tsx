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
  isOwner: boolean
}


const Profile = (props: PropsType) => {

  return (
    <div className={styles.content}>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} updateStatus={props.updateStatus} status={props.status} profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


