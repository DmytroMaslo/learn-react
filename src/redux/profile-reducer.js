import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const UPDATE_STATUS = 'UPDATE-STATUS';
const SET_NEW_STATUS = 'SET-NEW-STATUS';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        { id: 1, post: 'Hi! first message', likes: 3 },
        { id: 2, post: 'Using props!', likes: 5 },
        { id: 3, post: 'How are you?', likes: 7 },
        { id: 4, post: 'Spam message', likes: 4 },
        { id: 5, post: 'Just another post', likes: 9 },
        { id: 6, post: 'More post is better', likes: 13 },
    ],
    newPostText: 'data from state',
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 7, post: state.newPostText, likes: 0 }],
                newPostText: ''

            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                profile: { ...state.profile, aboutMe: action.textStatus },

            }
        }
        case SET_NEW_STATUS: {
            return {
                ...state,
                profile: { ...state.profile, aboutMe: action.textStatus },

            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => {
    return (dispath) => {
        userAPI.getUserProfile(userId).then(response => {
            dispath(setUserProfile(response.data));
        })
    }
}

// export const updateStatus = (status) => ({
//     type: UPDATE_STATUS,
//     textStatus: status
// })
export const setNewStatus = (status) => ({ type: SET_NEW_STATUS, })


export const setStatus = (status) => ({ type: SET_STATUS, status })
export const getStatus = (userId) => {
    return (dispath) => {
        profileAPI.getStatus(userId).then(response => {
            dispath(setStatus(response.data));
        })
    }
}
export const updateStatus = (status) => {
    return (dispath) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispath(setStatus(status));
            }
        })
    }
}
export default profileReducer;