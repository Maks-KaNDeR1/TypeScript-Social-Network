import React, { ComponentType, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, ProfileType, savePhoto, saveProfile } from "./state/profile-reducer";
import { withRouter } from '../../hoc/WithRouter';
import { compose } from 'redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UserType, follow, unfollow } from '../Users/state/users-reducer';


type PropsType = {
    profile: ProfileType
    authorizedUserId: number
    status: string
    getStatus: (userId: number) => void
    getUserProfile: (userId: string | undefined) => void
    updateStatus: (value: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
    users: UserType[]
    followingInProgress: []
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const ProfileContainer: React.FC<PropsType> = (
    {
        profile,
        authorizedUserId,
        status,
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
        users,
        followingInProgress,
        follow,
        unfollow
    }) => {

    const getProfile = useCallback((userId: any) => {
        getUserProfile(userId)
        getStatus(userId)
    }, [])

    const navigate = useNavigate()
    const { userId } = useParams();
    useEffect(() => {
        if (!userId) {
            let userId = authorizedUserId;
            if (!userId) {
                navigate("/login");
            }
            getProfile(userId)
        } else {
            getProfile(userId)
        }
    }, [])

    return <Profile
        isOwner={!userId}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
        users={users}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
    />
}

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    users: state.usersPage.users,
    followingInProgress: state.usersPage.followingInProgress
})


export default compose<ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile, follow, unfollow }),
    withRouter,
)(ProfileContainer)
