import React from "react";
import { login, logout } from '../../redux/auth-reducer';
import Login from "./Login";
import { connect } from "react-redux";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authError: state.auth.authError
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(login(data))
        },
        logout: () => {
            dispatch(logout())
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Login);
