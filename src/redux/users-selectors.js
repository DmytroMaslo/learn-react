import { createSelector } from "reselect"

export const getUsersSelector = state => state.usersPage.users

export const getPageSizeSelector = state => state.usersPage.pageSize

export const getTotalUsersCountSelector = state => state.usersPage.totalUsersCount

export const getCurrentPagesSelector = state => state.usersPage.currentPage

export const getIsFetchingSelector = state => state.usersPage.isFetching

export const getFollowingInProgressSelector = state => state.usersPage.followingInProgress


