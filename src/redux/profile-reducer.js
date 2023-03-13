import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST'

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

//action creators
export const addPostActionCreator = (postText) => ({ type: ADD_POST, post: postText })

export const deletePost = (postId) => ({ type: DELETE_POST, id: postId })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

//thunks 
export const getUserProfile = (userId) => async (dispath) => {
    let response = await userAPI.getUserProfile(userId)
    
    dispath(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispath) => {
    let response = await profileAPI.getStatus(userId)

    dispath(setStatus(response.data));
}

export const updateStatus = (status) => async (dispath) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispath(setStatus(status));
    }
}

export const login = (data) => async (dispath) => {
    let response = await profileAPI.login(data)

    if (response.data.resultCode === 0) {
        dispath(getUserProfile(response.data.data.userId));
    }
}

export default profileReducer;