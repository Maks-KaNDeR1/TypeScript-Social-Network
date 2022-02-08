import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { setCurrentPage, setUsers, setUsersTotalCount, toggleFollow, UserType } from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: Array<UserType>) => void
    toggleFollow: (userId: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
}

class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {

        return <Users users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            toggleFollow={this.props.toggleFollow}
            onPageChanged={this.onPageChanged}
        />
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    setUsers: (users: Array<UserType>) => void
    toggleFollow: (userId: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    toggleFollow: (userId: number) => {
        dispatch(toggleFollow(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsers(users));
    },
    setCurrentPage: (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
        dispatch(setUsersTotalCount(totalCount))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
