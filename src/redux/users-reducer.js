const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
let initialState = {
    users: [
        {id: 1,name: "Alexandra Neaman",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
        {id: 1,name: "Nicole Smith",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
        {id: 1,name: "Samanta Stone",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
        {id: 1,name: "Daniela Rodrigez",uniqueUrlName: null,photos: {small: null,large: null}, status: null, followed: false},
    ],
  }
const userReducer = (state = initialState,action)=>{
    switch (action.type){
        case FOLLOW:{
            return {
                ...state,
                //users:[...state.users]
                users: state.users.map(user=>{
                    if(user.id === action.userId){
                        return {...user, followed:true}
                    }
                    return user;                    
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                //users:[...state.users]
                users: state.users.map(user=>{
                    if(user.id === action.userId){
                        return {...user, followed:false}
                    }
                    return user;                    
                })
            }
        }
        case SET_USERS:{
            return {...state,users:[...state.users, ...action.users]}
        }
        default:
            return state        
    }
}
export const followAC = (userId) => ({ type: FOLLOW })
export const unfollowAC = (userId) => ({ type: UNFOLLOW })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default userReducer;