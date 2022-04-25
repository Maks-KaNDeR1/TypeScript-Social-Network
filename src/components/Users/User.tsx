
import React from 'react';
import styles from './users.module.css';
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

    return <div className={styles.userBlock}>
        <span>
            <div>
                <NavLink to={`/profile/${user.id}`} >
                    <img src={user.photos?.small != null ? user.photos?.small : userPhoto}
                        className={styles.userPhoto} alt='profilePhoto' />
                </NavLink>
            </div>
            <div >
                
                {user.followed
                    ? <button className={styles.gradientButton} disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}
                    > Unfollow </button>
                    : <button className={styles.gradientButton} disabled={followingInProgress.some(id => id === user.id)}
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
