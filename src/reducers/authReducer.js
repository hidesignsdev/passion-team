import {
    SIGN_IN, SIGN_IN_SUCCESS,
    SIGN_UP, SIGN_UP_SUCCESS,
    UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS,
    REQUESTING_FAILURE,
    SIGN_OUT
} from '../actions/index'


const initialState = {
    user: {},
    sessionToken: null,
    error: false,
    code: null,
    errorMessage: "",
    isLogin: false,
    isComplete: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            console.log('im here',action.payload)
            return {
                ...state,
                user: action.payload,
                sessionToken: action.payload.sessionToken,
                isLogin: true
            }
        case SIGN_OUT:
            return{
                ...state,
                user: {},
                sessionToken: null,
                error: false,
                code: null,
                errorMessage: "",
                isLogin: false,
                isComplete: false
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                sessionToken: action.payload.sessionToken,
                isLogin: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLogin: true,
                isComplete: true
            }
        case REQUESTING_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.error,
                code: action.payload.code
            }
        default: return state
    }
}

export default authReducer