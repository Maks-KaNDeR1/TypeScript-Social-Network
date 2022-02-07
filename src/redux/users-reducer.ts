

export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


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
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    // isFetching: true,
    // followingInProgress: [] as Array<number>, //array of users ids
    // fake: 10
};

export type UsersReducerType = typeof initialState

export const usersReducer = (state: UsersReducerType = initialState, action: ActionsType): UsersReducerType => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
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
        case SET_USERS: {
            return { ...state, users: [...action.users] }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        default:
            return state;
    }
};



type ActionsType =
    ToggleFollowType |
    setUsersType |
    setCurrentPageType |
    setUsersTotalCountType

type ToggleFollowType = ReturnType<typeof toggleFollow>
export const toggleFollow = (userId: number) =>
    ({ type: TOGGLE_FOLLOW, userId } as const)

type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) =>
    ({ type: SET_USERS, users } as const)


type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) =>
    ({ type: SET_CURRENT_PAGE, currentPage } as const)


type setUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalUsersCount: number) =>
    ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const)




export default usersReducer
