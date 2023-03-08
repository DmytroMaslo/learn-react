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
  let stateCopy;
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            return {
                ...state,
                newMessage:'',
                messages:[...state.messages,{id:8,message:action.message}]
            }
        }
        case UPDATE_NEW_MESSAGE:{
            return {
                ...state,
                newMessage:action.newMessage}
             
        }
        default:
            return state
    }
}
export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, message:newMessageBody }) 
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: text
})
export default dialogsReducer;