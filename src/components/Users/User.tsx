
import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UserType } from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';


type PropsType = {
    user: UserType
    followingInProgress: []
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, unfollow, follow }
    ) => {

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
                    ? <button className={s.gradientButton} disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}
                    > Unfollow </button>
                    : <button className={s.gradientButton} disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}
                    > Follow </button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status || <br /> } </div>
            </span>
        </span>
    </div>
}

export default User;
