const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

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
    realUsersCount:0,
    currentPage: 3
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                //users:[...state.users]
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
                //users:[...state.users]
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
        
        default:
            return state
    }
}
export const followAC = (userId) => ({ type: FOLLOW })
export const unfollowAC = (userId) => ({ type: UNFOLLOW })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })



export default userReducer;