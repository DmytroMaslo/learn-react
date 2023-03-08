import React from "react";
import { login } from "../../redux/profile-reducer";
import Login from "./Login";
import { connect } from "react-redux";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(login(data))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Login);
