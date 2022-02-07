
import { useEffect } from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UserType } from '../../redux/users-reducer';
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

const Users = (props: UsersPropsType) => {

    useEffect(() => {
        console.log(props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
                   .then(response => {
                        props.setUsers(response.data.items);
                        props.setTotalUsersCount(response.data.totalCount);
            });
    },[]);

    let onPageChanged = (pageNumber: number) => {
                props.setCurrentPage(pageNumber);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
                     .then(response => {
                         props.setUsers(response.data.items);
                     });
             }

    let pagesCount = Math.ceil ( props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return <div>
        <div>
        { pages.map( p => {
                    return <span // className={props.currentPage ===  p && styles.selectedPage }
                    onClick={(e) => { onPageChanged(p); }}>{p}</span>
                })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos?.small != null ? u.photos?.small : userPhoto} className={styles.userPhoto} />
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
