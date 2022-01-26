import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropsType = {
  profilePage: ProfilePageType
}

const Profile = (props: PropsType) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPostsContainer profilePage={props.profilePage} />
    </div>
  )
}

export default Profile;