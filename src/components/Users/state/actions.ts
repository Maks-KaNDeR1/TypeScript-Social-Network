import { FilterType, UserType } from "./users-reducer"


export const toggleFollow = (userId: number) =>
    ({ type: 'SN/USERS/TOGGLE_FOLLOW', userId } as const)

export const toggleIsFetching = (isFetching: boolean) =>
    ({ type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching } as const)

export const toggleFollowingProgress = (userId: number, isFetching: boolean) =>
    ({ type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', userId, isFetching } as const)

export const setUsers = (users: Array<UserType>) =>
    ({ type: 'SN/USERS/SET_USERS', users } as const)

export const setCurrentPage = (page: number) =>
    ({ type: 'SN/USERS/SET_CURRENT_PAGE', page } as const)

export const setFilter = (filter: FilterType) =>
    ({ type: 'SN/USERS/SET_FILTER', payload: filter } as const)

export const setPageSize = (page: number) =>
    ({ type: 'SN/USERS/SET_PAGE_SIZE', page } as const)

export const setUsersTotalCount = (totalUsersCount: number) =>
    ({ type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalUsersCount } as const)



export type UsersActionsType =
    | ReturnType<typeof toggleFollow>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setFilter>
    | ReturnType<typeof setPageSize>
    | ReturnType<typeof setUsersTotalCount>
