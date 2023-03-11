export const getUsersSelector = (state)=>{
    return state.usersPage.users;
}
export const getPageSizeSelector = (state)=>{
    return state.usersPage.pageSize;
}
export const getTotalUsersCountSelector = (state)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPagesSelector = (state)=>{
    return state.usersPage.currentPages
}
export const getIsFetchingSelector = (state)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state)=>{
    return state.usersPage.followingInProgress
}

