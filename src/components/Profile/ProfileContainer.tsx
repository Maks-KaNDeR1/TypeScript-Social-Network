import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from '../../hoc/WithRouter';
import { Navigate } from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        console.log(this.props);

        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 22023
        }

        this.props.getUserProfile(userId)
    };
    render() {

        return <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} />

    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


export const RoutedComponent = WithAuthRedirect(withRouter
    (connect(mapStateToProps, { getUserProfile })
        (ProfileContainer)));

export default RoutedComponent