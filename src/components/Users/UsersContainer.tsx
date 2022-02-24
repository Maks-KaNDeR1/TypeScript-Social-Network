import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { setCurrentPage, setUsers, setUsersTotalCount, toggleFollow, toggleIsFetching, UserType } from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    setUsers: (users: Array<UserType>) => void
    toggleFollow: (userId: number) => void
    setUsersTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    };

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
    }
    render() {

        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                toggleFollow={this.props.toggleFollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})


export default connect(mapStateToProps, {
    setUsers,
    toggleFollow,
    toggleIsFetching,
    setCurrentPage,
    setUsersTotalCount
})(UsersContainer);
