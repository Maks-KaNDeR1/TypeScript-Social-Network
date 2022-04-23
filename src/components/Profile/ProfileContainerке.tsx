import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from '../../hoc/WithRouter';
import { compose } from 'redux';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        // debugger
        console.log(this.props);

        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) return <Navigate to='/login' />
            
        };
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render() {

        return <Profile {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            
        
        />

    }
}

let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<ComponentType>(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
)(ProfileContainer)
