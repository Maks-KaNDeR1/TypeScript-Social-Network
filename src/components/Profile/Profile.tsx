import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';

type PropsType = {
  profile: ProfileType
  isAuth: boolean
}


const Profile = (props: PropsType) => {

  return (
    <div className={styles.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


