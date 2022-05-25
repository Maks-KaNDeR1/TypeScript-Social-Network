
import React from 'react';
import { UserType } from '../../redux/users-reducer';
import Paginator from '../common/Paginator/Paginator';
import s from './users.module.css';
import User from './User';


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: []
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const Users: React.FC<UsersPropsType> = (
    {
        currentPage, totalUsersCount,
        pageSize, onPageChanged, users,
        ...props
    }) => {
    return <div>
        <Paginator pageSize={pageSize} currentPage={currentPage}
            totalItemsCount={totalUsersCount} onPageChanged={onPageChanged}
        />



        <div className={s.usersBlock} >
            {
                users.map(u => <User user={u} key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>
    </div>
}

export default Users;
