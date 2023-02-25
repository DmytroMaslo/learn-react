const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state,action)=>{
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