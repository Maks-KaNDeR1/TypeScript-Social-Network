import React from 'react';
import { UserType } from './state/users-reducer';
import s from './users.module.css';
import User from './User/User';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { UsersSearchForm } from './UsersSearchForm'
import { FilterType } from './state/users-reducer'

type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    followingInProgress: []
    onPageChanged: (pageNumber: number, pageSize?: number) => void
    onFilterChanged: (filter: FilterType) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const Users: React.FC<UsersPropsType> = (
    {
        users, currentPage, totalUsersCount, onPageChanged, onFilterChanged,
        ...props
    }) => {


    const onChange: PaginationProps['onChange'] = (page, pageSize) => {
        onPageChanged(page, pageSize);
    };


    return <div>
        <div className={s.menu}>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            <br />
            <Pagination
                showQuickJumper
                onChange={onChange}
                showSizeChanger
                defaultCurrent={1}
                total={totalUsersCount}
                defaultPageSize={15}
                pageSizeOptions={[15, 30, 60, 90]}
            />
        </div>

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
