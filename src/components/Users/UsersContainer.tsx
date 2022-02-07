import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { setCurrentPage, setUsers, setUsersTotalCount, toggleFollow, UserType } from '../../redux/users-reducer';
import Users from './Users';



type MapStateToPropsType = {

}

type MapDispatchToPropsType = {
    // toggleFollowHandler: () => void
}


let mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

let mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleFollow: (userId: number) => {
        dispatch(toggleFollow(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsers(users));
    },
    setCurrentPage: (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
        dispatch(setUsersTotalCount(totalCount))
    }
})

    export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
