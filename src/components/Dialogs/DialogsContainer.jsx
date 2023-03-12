import React from "react";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../login/AuthRedirectComponent";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: getDialogsSelector(state),
        messages: getMessagesSelector(state),
        newMessage: getNewMessageSelector(state),
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (message) => {
            dispatch(addMessageActionCreator(message))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


/**
 const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let onAddMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let onMessageChange = (textMessage) => {
                    store.dispatch(updateNewMessageActionCreator(textMessage))
                }
                return (
                    <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessage={state.dialogsPage.newMessage}
                        onAddMessage={onAddMessage}
                        onMessageChange={onMessageChange} />
                )
            }
            }

        </StoreContext.Consumer>
    )
} 
 */