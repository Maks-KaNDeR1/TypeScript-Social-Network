import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';

type PropsType = {
  profilePage: ProfilePageType
}

const Profile = (props: PropsType) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
      />
    </div>
  )
}

export default Profile;