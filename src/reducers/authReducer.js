import {
    SIGN_IN, SIGN_IN_SUCCESS,
    SIGN_UP, SIGN_UP_SUCCESS,
    UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS,
    REQUESTING_FAILURE
} from '../actions/index'


const initialState = {
    user: {},
    sessionToken: null,
    error: false,
    code: null,
    errorMessage: "",
    isLoading: false,
    isLogin: false,
    isComplete: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                sessionToken: action.payload.sessionToken,
                isLoading: false,
                isLogin: true
            }
        case SIGN_UP:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                sessionToken: action.payload.sessionToken,
                isLoading: false,
                isLogin: true
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLogin: true,
                isComplete: true
            }
        case REQUESTING_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.error,
                code: action.payload.code,
                isLoading: false
            }
        default: return state
    }
}

export default authReducer