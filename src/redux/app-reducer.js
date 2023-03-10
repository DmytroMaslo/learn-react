import { profileAPI, userAPI } from "../api/api";
import {getAuthUserData} from "./auth-reducer"
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const FAIL_LOGIN='FAIL_LOGIN';

let initialState = {
    initialazed:false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialazed:true,
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS})

export const initializeApp = () =>(dispatch)=> {

    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
}


export default appReducer;