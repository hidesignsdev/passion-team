export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const signUp = (data) => {
    return {
        type: SIGN_UP, 
        payload: {data}
    }
}

export const signIn = (data) => {
    return {
        type: SIGN_IN, 
        payload: {data}
    }
}