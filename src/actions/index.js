export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'

export const signUp = (data) => {
    return {
        type: SIGN_UP, 
        payload: {data}
    }
}