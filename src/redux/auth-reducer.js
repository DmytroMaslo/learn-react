import { profileAPI, userAPI } from "../api/api";

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
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId,email,login,isAuth) => ({ type: SET_USER_DATA, data:{userId,email,login,isAuth} })

export const getAuthUserData = () => {
    return (dispatch) => {
        userAPI.authUser().then(response => {
            if(response.resultCode===0){
                dispatch(setAuthUserData(response.data.id,response.data.email,response.data.login,true))
            }
        })
    }
}
export const login = (data) => {
    return (dispath) => {
        profileAPI.login(data).then(response => {
            if (response.data.resultCode === 0) {
                dispath(getAuthUserData());
            }
        })
    }
}
export const logout = () => {
    return (dispath) => {
        profileAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispath(setAuthUserData(null,null,null,false));
            }
        })
    }
}


export default authReducer;