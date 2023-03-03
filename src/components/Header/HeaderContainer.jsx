import axios from "axios";
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { userAPI } from "../../api/api";
class HeaderContainer extends React.Component {

    componentDidMount(){
        userAPI.authUser().then(response => {
            if(response.data.resultCode===0){
                this.props.setAuthUserData(response.data.data.id,response.data.data.email,response.data.data.login)
            }
            
            
        })
    }

    render(){
        return <Header {...this.props} />
    }

}
const mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})
export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)