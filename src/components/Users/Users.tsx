// import React, { MouseEvent } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFollow, UserType } from '../../redux/users-reducer';

// type UsersPropsType = {
//     // toggleFollowHandler: (followed: boolean) => void
// }

// function Users(props: UsersPropsType) {

//     const followed = useSelector<UserType, boolean>(state => state.followed)

//     const dispatch = useDispatch()

// //   let toggleFollowHandler = () => {
// //      if(followed === true) {
// //         dispatch(toggleFollow(false))
// //      } else dispatch(toggleFollow(true))
// //   }ну а ес

//   let toggleFollowHandler = (id: number) => {
//     dispatch(toggleFollow(id))
// }
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

const Users = (props: UsersPropsType) => {

    
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }
  
return <div>
    
        <button onClick={getUsers}>Get Users</button>
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
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
