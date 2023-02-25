import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
  _state: {
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
      ],
      newMessage:'Type your message here'
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
    },
    sidebar:{

    },

  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
    this._state.sidebar = sidebarReducer(this._state.sidebar,action)
    this._callSubscriber();
  }
}


window.store = store;
export default store;