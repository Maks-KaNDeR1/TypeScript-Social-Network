import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import {
    setCurrentPage,
    UserType,
    toggleIsFetching,
    requestUsers,
    follow,
    unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}


class UsersContainer extends React.Component<any, UsersPropsType> {
    componentDidMount() {

        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    };

    onPageChanged = (pageNumber: number) => {
        const pageSize = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {

        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}



let mapStateToProps = (state: AppRootStateType) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
})



export default compose<ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps, {
        toggleIsFetching,
        setCurrentPage,
        getUsers: requestUsers ,
        follow,
        unfollow
    })
)(UsersContainer)
