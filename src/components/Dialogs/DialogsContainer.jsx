import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import AuthRedirectComponent, { withAuthRedirect } from "../login/AuthRedirectComponent";


let mapStateToProps = (state) =>{
    return{
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessage:state.dialogsPage.newMessage,
        isAuth:state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        onMessageChange:(textMessage)=>{
            dispatch(updateNewMessageActionCreator(textMessage))
        },
        onAddMessage:()=>{
            dispatch(addMessageActionCreator())
        }
    }
}
let MyAuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(MyAuthRedirectComponent);
export default DialogsContainer;


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