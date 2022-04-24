import React, { ComponentType, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, ProfileType } from "../../redux/profile-reducer";
import { withRouter } from '../../hoc/WithRouter';
import { compose } from 'redux';
import { useNavigate, useParams } from 'react-router-dom';


type PropsType = {
    profile: ProfileType
    authorizedUserId: number
    status: string
    getStatus: (userId: number) => void
    getUserProfile: (userId: string | undefined) => void
    updateStatus: (value: string) => void
}

const ProfileContainer = (props: PropsType) => {

    const getProfile = useCallback((userId: any) => {
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [props])
    


    const navigate = useNavigate()
    const { userId } = useParams();
    useEffect(() => {
        if (!userId) {
            let userId = props.authorizedUserId;
            if (!userId) {
                navigate("/login");
            }
            getProfile(userId)
        }
        getProfile(userId)
    }, [props, userId, navigate, getProfile])

    return <Profile {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
    />


}

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
)(ProfileContainer)
