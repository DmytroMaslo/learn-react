import { userAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: 2,
    email: null,
    login: null,
    isAuth:false,
    isFetching: false,

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            console.log('action: ' + action.data)
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        default:
            return state
    }
}
export const setAuthUserData = (userId,email,login) => ({ type: SET_USER_DATA, data:{userId,email,login} })

export const getAuthUserData = () => {
    return (dispatch) => {
        userAPI.authUser().then(response => {
            if(response.resultCode===0){
                dispatch(setAuthUserData(response.data.id,response.data.email,response.data.login))
            }
        })
    }
}



export default authReducer;