
import React, { useState } from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UserType } from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    toggleFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {

    const [followingInProgress, setFollowingInProgress] = useState<Array<number>>([])

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span // className={props.currentPage ===  p && styles.selectedPage }
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
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
                            ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                setFollowingInProgress([u.id])
                                // setFollowingInProgress(true, u.id)
                                userAPI.getFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.toggleFollow(u.id)
                                        }
                                        // setFollowingInProgress(false, u.id)
                                    })

                            }}> Unfollow </button>
                            : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                // setFollowingInProgress(false, u.id)
                                setFollowingInProgress([u.id])
                                userAPI.getUnfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.toggleFollow(u.id)
                                        }
                                        // setFollowingInProgress(false, u.id)
                                    })
                            }}> Follow </button>}

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
