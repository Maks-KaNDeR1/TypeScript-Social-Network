import { Dispatch } from "redux"
import { usersAPI } from "../../../api/api"
import { setCurrentPage, setFilter, setUsers, setUsersTotalCount, toggleFollow, toggleFollowingProgress, toggleIsFetching, UsersActionsType } from "./actions"

type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    name: string
    id: number
    photos?: PhotosType
    status: string
    followed: boolean
}


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  //array of users ids
    filter: {
        term: '',
        friend: null as null | boolean
    }
};

export type UsersReducerType = typeof initialState

export const usersReducer = (state: UsersReducerType = initialState, action: UsersActionsType): UsersReducerType => {
    switch (action.type) {
        case 'SN/USERS/TOGGLE_FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    }
                    return u
                })
            }
        }
        case 'SN/USERS/SET_USERS': {
            return { ...state, users: [...action.users] }
        }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case 'SN/USERS/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.page }
        }
        case 'SN/USERS/SET_PAGE_SIZE': {
            return { ...state, pageSize: action.page }
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case 'SN/USERS/SET_FILTER': {
            return { ...state, filter: action.payload }
        }
        default:
            return state;
    }
};




export const requestUsers = (page: number, pageSize: number, filter: FilterType) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    dispatch(setFilter(filter))
    const res = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.data.items));
    dispatch(setUsersTotalCount(res.data.totalCount));
}

const _followUnfollowFlow = async (dispatch: Dispatch, id: number, apiMethod: any) => {
    dispatch(toggleFollowingProgress(id, true))
    const res = await apiMethod(id)
    if (res.data.resultCode === 0) {
        dispatch(toggleFollow(id))
    }
    dispatch(toggleFollowingProgress(id, false))
}

export const follow = (id: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    _followUnfollowFlow(dispatch, id, apiMethod)
}

export const unfollow = (id: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI)
    _followUnfollowFlow(dispatch, id, apiMethod)
}


export type FilterType = typeof initialState.filter


export default usersReducer
