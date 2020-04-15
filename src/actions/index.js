export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'

export const REQUESTING_SUCCESS = 'REQUESTING_SUCCESS'
export const REQUESTING_FAILURE = 'REQUESTING_FAILURE'


export const signIn = (data) => {
    return {
        type: SIGN_IN, 
        payload: {data}
    }
}

export const signUp = (data) => {
    return {
        type: SIGN_UP, 
        payload: {data}
    }
}