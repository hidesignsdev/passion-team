import {SIGN_IN, SIGN_UP} from '../actions/index'

const initialState = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    gender: "",
    birthday: ""
}

const authReducer = (state = initialState, action) => {
        console.log(action)
    switch(action.type){
        case SIGN_IN: break
        case SIGN_UP:
            return{
                ...state,
                email: action.payload.data.email,
                password: action.payload.data.password,
                firstname: action.payload.data.firstname,
                lastname: action.payload.data.lastname
            }
        default: return state
    }
}

export default authReducer