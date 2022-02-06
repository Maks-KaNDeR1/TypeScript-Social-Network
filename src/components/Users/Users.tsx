
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UserType } from '../../redux/users-reducer';
import axios from 'axios';


type UsersPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    toggleFollow: (userId: number) => void
}

class Users extends React.Component<any, UsersPropsType> {
    
    componentDidMount() {
        console.log(this.props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        return <div>

            {
                this.props.users && this.props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos?.small != null ? u.photos?.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                   this.props.toggleFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.toggleFollow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
                            }
        </div>
    }
}
export default Users;
