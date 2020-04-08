import {SIGN_IN, SIGN_UP, SIGN_UP_SUCCESS} from '../actions/index'

const initialState = {
    user: [],
    authentication: false,
    error: false,
    errorMessage: ""
}

const authReducer = (state = initialState, action) => {
    const user = state.user
    let {authentication, error, errorMessage} = state.user
    switch(action.type){
        case SIGN_IN: 
            for(let i=0;i<user.length;i++){
                if(action.payload.data.email === user[i].email){
                    if(action.payload.data.password === user[i].password){
                        authentication = true
                        error = false
                        errorMessage = ""
                        break
                    }
                    else{
                        error = true
                        errorMessage = "Password incorrect."
                        break
                    }
                }
                else{
                    error = true
                    errorMessage = "Email not found."
                    break
                }
            }
            console.log(errorMessage)
            return{
                ...state,
                authentication,
                error,
                errorMessage
            }
        case SIGN_UP_SUCCESS:
            console.log(action.payload)
            user.push(action.payload)
            console.log('User:',user)
            return{
                ...state,
                user
            }
        default: return state
    }
}

export default authReducer