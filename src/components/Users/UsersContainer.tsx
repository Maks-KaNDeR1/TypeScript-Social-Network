import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import {
    setCurrentPage,
    setPageSize,
    toggleIsFetching,
} from './state/actions';
import {
    requestUsers,
    follow,
    unfollow,
    UserType,
    FilterType
} from './state/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "./state/users-selectors";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    setCurrentPage: (pageNumber: number) => void
    setPageSize: (pageSize: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}


class UsersContainer extends React.Component<any, UsersPropsType> {
    componentDidMount() {
        const { currentPage, pageSize, filter } = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    };


    onPageChanged = (pageNumber: number, pageSize?: number) => {
        // const { pageSize } = this.props
        // if (!pageSizeClick) {
        //     this.props.getUsers(pageNumber, pageSize)
        // }
        const { filter } = this.props
        this.props.setPageSize(pageSize)
        this.props.getUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const { pageSize } = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
                onFilterChanged={this.onFilterChanged}
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
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
})



export default compose<ComponentType>(
    connect(mapStateToProps, {
        toggleIsFetching,
        setCurrentPage,
        getUsers: requestUsers,
        follow,
        unfollow,
        setPageSize
    })
)(UsersContainer)
