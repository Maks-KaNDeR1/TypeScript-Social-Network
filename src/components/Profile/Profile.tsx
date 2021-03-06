import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from './state/profile-reducer';
import { UserType } from '../Users/state/users-reducer';

type PropsType = {
  profile: ProfileType
  status: string
  updateStatus: (value: string) => void
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => void
  isOwner: boolean
  users: UserType[]
  followingInProgress: []
  follow: (id: number) => void
  unfollow: (id: number) => void
}


const Profile: React.FC<PropsType> = (
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

  return (
    <div className={s.content}>
      <ProfileInfo profile={profile}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
        isOwner={isOwner}
        updateStatus={updateStatus}
        status={status}
        users={users}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;


