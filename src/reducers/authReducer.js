import {SIGN_IN, SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from '../actions/index'


const initialState = {
    user: [],
    code: "",
    error: "",
    isLoading: false
}

const authReducer = (state = initialState, action) => {
    const user = state.user
    switch(action.type){
        case SIGN_IN: 
            return{
                ...state,
            }
        case SIGN_UP:
            return{
                ...state,
                isLoading: true
            }
        case SIGN_UP_SUCCESS:
            user.push(action.payload)
            console.log(action)
            return{
                ...state,
                user,
                code: "",
                error: "",
                isLoading: false
            }
        case SIGN_UP_FAILURE:
            console.log(action)
            return{
                ...state,
                code: action.payload.err.code,
                error: action.payload.err.error,
                isLoading: false
            }
        default: return state
    }
}

export default authReducer