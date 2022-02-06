
import { useEffect } from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UserType } from '../../redux/users-reducer';
import axios from 'axios';


type UsersPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    toggleFollow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {

    useEffect(() => {
        console.log(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    },[]);
    return <div>
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
