import React, { ComponentType, useEffect } from 'react';
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
    getStatus: (userId: any) => void
    getUserProfile: (userId: any) => void
    updateStatus: (value: string) => void
}

const ProfileContainer = (props: PropsType) => {

    let navigate = useNavigate()
    let {userId} = useParams();
    useEffect(() => {
        if (!userId) {
            let userId = props.authorizedUserId;
            if (!userId) {
                navigate("/login");
            }
            props.getUserProfile(userId)
            props.getStatus(userId)
        }
    }, [userId])

    return <Profile {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
    />


}

let mapStateToProps = (state: AppRootStateType) => ({
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
