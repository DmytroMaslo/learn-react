const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
let initialState = {
    users: [
      { id:1, followed:true, avatar: './../../img/avatars/avatar2.png', fullName:'Alexandra Neaman', location:{country:'France', city:'Paris'},description:'Some description'},
      { id:2, followed:true,  avatar: './../../img/avatars/avatar3.png', fullName:'Nicole Smith', location:{country:'USA', city:'New York'},description:'Im learning React' },
      { id:3, followed:false,  avatar: './../../img/avatars/avatar4.png', fullName:'Samanta Stone', location:{country:'Ukraine', city:'Kiyv'},description:'So borring...' },
      { id:4, followed:true,  avatar: './../../img/avatars/avatar5.png', fullName:'Daniela Rodrigez', location:{country:'Spain', city:'Madrid'},description:'Another description'},
      { id:5, followed:false,  avatar: './../../img/avatars/avatar2.png', fullName:'Daniela Rodrigez1', location:{country:'Spain', city:'Madrid'},description:'Another 1 description'},
      { id:6,  followed:true, avatar: './../../img/avatars/avatar3.png', fullName:'Daniela Rodrigez2', location:{country:'Spain', city:'Madrid'},description:'Another 2 description'},
      { id:7, followed:false,  avatar: './../../img/avatars/avatar4.png', fullName:'Daniela Rodrigez3', location:{country:'Spain', city:'Madrid'},description:'Another 3 descriptio' },
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