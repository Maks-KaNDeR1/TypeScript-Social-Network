import { usersAPI } from "../../api/api"


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
    followingInProgress: [] as Array<number>  //array of users ids
};

export type UsersReducerType = typeof initialState

export const usersReducer = (state: UsersReducerType = initialState, action: ActionsType): UsersReducerType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW': {
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
        case 'SET_USERS': {
            return { ...state, users: [...action.users] }
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case 'SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.page }
        }
        case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};



type ActionsType =
    ToggleFollowType |
    setUsersType |
    setCurrentPageType |
    setUsersTotalCountType |
    toggleIsFetchingType |
    toggleIsFollowingProgressType

type ToggleFollowType = ReturnType<typeof toggleFollow>
export const toggleFollow = (userId: number) =>
    ({ type: 'TOGGLE_FOLLOW', userId } as const)

type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) =>
    ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const)

type toggleIsFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (userId: number, isFetching: boolean) =>
    ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', userId, isFetching } as const)

type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) =>
    ({ type: 'SET_USERS', users } as const)

type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) =>
    ({ type: 'SET_CURRENT_PAGE', page } as const)

type setUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalUsersCount: number) =>
    ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount } as const)



export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const res = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.data.items));
    dispatch(setUsersTotalCount(res.data.totalCount));
}

const followUnfollowFlow = async (dispatch: any, id: number, apiMethod: any) => {
    dispatch(toggleFollowingProgress(id, true))
    const res = await apiMethod(id)
    if (res.data.resultCode === 0) {
        dispatch(toggleFollow(id))
    }
    dispatch(toggleFollowingProgress(id, false))
}

export const follow = (id: number) => async (dispatch: any) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    followUnfollowFlow(dispatch, id, apiMethod)
}

export const unfollow = (id: number) => async (dispatch: any) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI)
    followUnfollowFlow(dispatch, id, apiMethod)
}





export default usersReducer
