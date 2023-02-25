const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
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