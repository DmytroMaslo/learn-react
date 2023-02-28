const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    users: [
      { id:1, avatar: 'Hi! first message', fullName:'Alexandra Neaman', country:'France', city:'Paris',description:'Some description' },
      { id:2, avatar: 'Hi! first message', fullName:'Nicole Smith', country:'USA', city:'New York',description:'Im learning React ' },
      { id:3, avatar: 'Hi! first message', fullName:'Samanta Stone', country:'Ukraine', city:'Kiyv',description:'So borring...' },
      { id:4, avatar: 'Hi! first message', fullName:'Daniela Rodrigez', country:'Spain', city:'Madrid',description:'Another description' },
      { id:5, avatar: 'Hi! first message', fullName:'Daniela Rodrigez1', country:'Spain', city:'Madrid',description:'Another 1 description' },
      { id:6, avatar: 'Hi! first message', fullName:'Daniela Rodrigez2', country:'Spain', city:'Madrid',description:'Another 2 description' },
      { id:7, avatar: 'Hi! first message', fullName:'Daniela Rodrigez3', country:'Spain', city:'Madrid',description:'Another 3 description' },
    ],
  }
const userReducer = (state = initialState,action)=>{
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
        default:
            return state        
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
})
export default userReducer;