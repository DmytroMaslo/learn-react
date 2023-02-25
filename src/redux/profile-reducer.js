const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
let initialState = {
    posts: [
      { id: 1, post: 'Hi! first message', likes: 3 },
      { id: 2, post: 'Using props!', likes: 5 },
      { id: 3, post: 'How are you?', likes: 7 },
      { id: 4, post: 'Spam message', likes: 4 },
      { id: 5, post: 'Just another post', likes: 9 },
      { id: 6, post: 'More post is better', likes: 13 },
    ],
    newPostText: 'data from state'
  }
const profileReducer = (state = initialState,action)=>{
    switch (action.type){
        case ADD_POST:   
            let newPost = {
                id: 7,
                post: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state
        default:
            return state        
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
})
export default profileReducer;