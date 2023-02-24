let rerenderEntireTree = () => {
  console.log('state changed')
}

let state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'Nick' },
      { id: 3, name: 'Sam' },
      { id: 4, name: 'Daniel' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Dean' },
    ],
    messages: [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Okey' },
      { id: 4, message: 'Yo!' },
      { id: 5, message: 'Yo@' },
      { id: 6, message: 'Yo?' },
      { id: 7, message: '%#&$#$?' },
    ]
  },
  profilePage: {
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

}
window.state = state;
export const addPost = () => {
  let newPost = {
    id: 7,
    post: state.profilePage.newPostText,
    likes: 0
  };
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state;