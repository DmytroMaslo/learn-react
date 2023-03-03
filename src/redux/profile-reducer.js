const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFOLE = 'SET-USER-PROFILE'
let initialState = {
    posts: [
      { id: 1, post: 'Hi! first message', likes: 3 },
      { id: 2, post: 'Using props!', likes: 5 },
      { id: 3, post: 'How are you?', likes: 7 },
      { id: 4, post: 'Spam message', likes: 4 },
      { id: 5, post: 'Just another post', likes: 9 },
      { id: 6, post: 'More post is better', likes: 13 },
    ],
    newPostText: 'data from state',
    profile:null
  }
const profileReducer = (state = initialState,action)=>{
    switch (action.type){
        case ADD_POST:{
            return {
                ...state,
                posts:[...state.posts,{ id: 7, post: state.newPostText, likes: 0}],
                newPostText:''

            }
        }
        case UPDATE_NEW_POST:{
            return{
                ...state,
                newPostText:action.newText
            }
        }
        case SET_USER_PROFOLE:{
            return{
                ...state,
                profile:action.profile
            }
        }
        default:
            return state        
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
})
export const setUserProfile = (profile) =>({type:SET_USER_PROFOLE,profile})
export default profileReducer;