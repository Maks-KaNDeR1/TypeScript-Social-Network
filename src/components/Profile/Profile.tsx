import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-reducer';

type PropsType = {
  profile: ProfileType
  isAuth: boolean
  status: string
  updateStatus: (value: string) => void
}


const Profile = (props: PropsType) => {

  return (
    <div className={styles.content}>
      <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


