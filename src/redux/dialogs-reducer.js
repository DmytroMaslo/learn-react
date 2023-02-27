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
        case ADD_MESSAGE:{
            let newMessageText = {
                id: 7,
                message: state.newMessage,
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]

            stateCopy.messages.push(newMessageText)
            stateCopy.newMessage = '';
            console.log(stateCopy)
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE:{
            let stateCopy = {...state}
            stateCopy.newMessage = action.newMessage;
            return stateCopy
        }
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