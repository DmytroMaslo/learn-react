import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

    

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (textMessage) => {
        props.store.dispatch(updateNewMessageActionCreator(textMessage))
    }
    return (
        <Dialogs 
            dialogs = {state.dialogsPage.dialogs} 
            messages = {state.dialogsPage.messages}
            newMessage = {state.dialogsPage.newMessage}
            onAddMessage = {onAddMessage} 
            onMessageChange ={onMessageChange} />
    )
    
}

export default DialogsContainer;