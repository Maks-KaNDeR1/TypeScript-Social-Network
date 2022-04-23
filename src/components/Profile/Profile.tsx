import React, { useEffect } from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

type PropsType = {
  profile: ProfileType
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


