
import React from 'react';
import s from './user.module.css';
import userPhoto from '../../../assets/images/user.png';
import { UserType } from '../users-reducer';
import { NavLink } from 'react-router-dom';


type PropsType = {
    user: UserType
    followingInProgress: []
    follow: (id: number) => void
    unfollow: (id: number) => void
}





const User: React.FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {


    const followOrUnfollowButton = (followOrUnfollow: (id: number) => void, title: string) => {
        return <>
            <button
                className={s.gradientButton}
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { followOrUnfollow(user.id) }}
            >
                {followingInProgress.some(id => id === user.id) && (
                    <i
                        className="fa fa-refresh fa-spin"
                        style={{ margin: "1px 2px 0 1px", fontSize: "12px" }}
                    />
                )} {title} </button>
        </>
    }

    return <div className={s.userBlock}>
        <span>
            <div>
                <NavLink to={`/profile/${user.id}`} >
                    <img src={user.photos?.small != null ? user.photos?.small : userPhoto}
                        className={s.userPhoto} alt='profilePhoto' />
                </NavLink>
            </div>
            <div >

                {user.followed
                    ? followOrUnfollowButton(follow, 'Unfollow')
                    : followOrUnfollowButton(unfollow, 'Follow')
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status || <br />} </div>
            </span>
        </span>
    </div>
}

export default User;
