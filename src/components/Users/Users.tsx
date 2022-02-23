
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UserType } from '../../redux/users-reducer';
import { NavLink, useLocation} from 'react-router-dom';


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    toggleFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {

    let url = useLocation()
	console.log(url)

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
                            ? <button onClick={() => {
                                props.toggleFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.toggleFollow(u.id)
                            }}>Follow</button>}

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
