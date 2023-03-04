import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FETCHING = 'SET_FETCHING';
const TOGGLE_IS_FOLOWING_PROCESS = 'TOGGLE_IS_FOLOWING_PROCESS'

let initialState = {
    users: [
        /* {id: 1,name: "Alexandra Neaman",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
         {id: 2,name: "Nicole Smith",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
         {id: 3,name: "Samanta Stone",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
         {id: 4,name: "Daniela Rodrigez",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
     */
    ],
    pageSize: 5,
    totalUsersCount: 57,
    realUsersCount: 0,
    currentPage: 3,
    isFetching: true,
    followingInProgress: [28238, 28237],
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;

                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, realUsersCount: action.totalCount }
        }
        case SET_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLOWING_PROCESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLOWING_PROCESS, isFetching, userId })

export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        dispatch(setCurrentPage(pageNumber))
        userAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.followUser(userId).then(data => {
            console.log(data)
            if (data.resultCode === 0) {
                dispatch(followAC(userId))
                
            }
            dispatch(toggleIsFollowingProgress(false,userId))
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(toggleIsFollowingProgress(false,userId))
        })
    }
}

export default userReducer;