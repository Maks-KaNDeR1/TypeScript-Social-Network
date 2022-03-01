import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from '../../hoc/WithRouter';
import { compose } from 'redux';


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        console.log(this.props);

        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 22023
        }

        this.props.getUserProfile(userId)

        this.props.getStatus(userId)
    };
    render() {

        return <Profile {...this.props}
         profile={this.props.profile} 
         isAuth={this.props.isAuth} 
         status={this.props.status}
         updateStatus={this.props.updateStatus}
         />

    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
)(ProfileContainer)
