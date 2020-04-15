import {
    SIGN_IN, SIGN_UP,
    REQUESTING_SUCCESS, REQUESTING_FAILURE
} from '../actions/index'


const initialState = {
    user: {},
    sessionToken: null,
    error: false,
    errorMessage: "",
    isLoading: false,
    isLogin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP:
            return {
                ...state,
                isLoading: true
            }
        case REQUESTING_SUCCESS:
            return {
                ...state,
                user: action.payload,
                sessionToken: action.payload.sessionToken,
                isLoading: false,
                isLogin: true
            }
        case REQUESTING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default: return state
    }
}

export default authReducer