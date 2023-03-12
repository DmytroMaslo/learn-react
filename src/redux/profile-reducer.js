import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const UPDATE_STATUS = 'UPDATE-STATUS';
const SET_NEW_STATUS = 'SET-NEW-STATUS';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST'


let initialState = {
    posts: [
        { id: 1, post: 'Hi! first message', likes: 3 },
        { id: 2, post: 'Using props!', likes: 5 },
        { id: 3, post: 'How are you?', likes: 7 },
        { id: 4, post: 'Spam message', likes: 4 },
        { id: 5, post: 'Just another post', likes: 9 },
        { id: 6, post: 'More post is better', likes: 13 },
    ],
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 7, post: action.post, likes: 0 }],
                newPostText: ''

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = (postText) => ({ type: ADD_POST, post: postText })
export const deletePost = (postId) => ({ type: DELETE_POST, id: postId })
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
export const login = (data) => {
    return (dispath) => {
        profileAPI.login(data).then(response => {
            if (response.data.resultCode === 0) {
                dispath(getUserProfile(response.data.data.userId));
            }
        })
    }
}
export default profileReducer;