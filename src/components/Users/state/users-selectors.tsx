import { createSelector } from "reselect";
import { AppRootStateType } from "../../../redux/redux-store";
import { UserType } from "./users-reducer";

const getUsersSelector = (state: AppRootStateType) => state.usersPage.users;

export const getUsers = createSelector(getUsersSelector,
    (users: Array<UserType>) => {
        return users.filter(u => true)
    })

export const getPageSize = (state: AppRootStateType) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppRootStateType) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state: AppRootStateType) => state.usersPage.currentPage;

export const getIsFetching = (state: AppRootStateType) => state.usersPage.isFetching;

export const getFollowingInProgress = (state: AppRootStateType) => state.usersPage.followingInProgress;

