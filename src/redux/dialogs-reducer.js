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
      { id: 3, message: 'Lorem ipsum dolor sit amet' },
      { id: 4, message: 'consectetur adipiscing elit!' },
      { id: 5, message: 'Cras in turpis augue' },
      { id: 6, message: 'Morbi vel felis quis' },
      { id: 7, message: 'augue faucibus tincidunt' },
    ],
    newMessage:'Type your message here'
  }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            return {
                ...state,
                newMessage:'',
                messages:[...state.messages,{id:8,message:action.message}]
            }
        }
        default:
            return state
    }
}
export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, message:newMessageBody }) 

export default dialogsReducer;