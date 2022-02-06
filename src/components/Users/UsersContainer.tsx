import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { setUsers, toggleFollow, UserType } from '../../redux/users-reducer';
import Users from './Users';



type MapStateToPropsType = {

}

type MapDispatchToPropsType = {
    // toggleFollowHandler: () => void
}


let mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users
})

let mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleFollow: (userId: number) => {
        dispatch(toggleFollow(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsers(users));
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
