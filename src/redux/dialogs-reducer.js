const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState =  {
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
  }
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessage,
            };
            state.messages.push(newMessage)
            state.newMessage = '';
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
        default:
            return state
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: text
})
export default dialogsReducer;