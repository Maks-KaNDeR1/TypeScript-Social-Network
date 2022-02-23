import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from '../../hoc/WithRouter';


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        console.log(this.props);
        
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}` )
            .then(response => {
                this.props.setUserProfile(response.data);
            });

    };
    render() {
        return <Profile {...this.props} profile={this.props.profile} />

    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export const RoutedComponent =  withRouter(connect(mapStateToProps, { setUserProfile })(ProfileContainer));

export default RoutedComponent