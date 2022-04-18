
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UserType } from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Preloader/Paginator';


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

const Users = (props: UsersPropsType) => {




    return <div>

        <Paginator pageSize={props.pageSize} currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged}
        />

        {
            props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`} >
                            <img src={u.photos?.small != null ? u.photos?.small : userPhoto}
                                className={styles.userPhoto} alt='profilePhoto' />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id) }}
                            > Unfollow </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}
                            > Follow </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;
