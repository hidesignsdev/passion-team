export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'

export const SIGN_OUT = 'SIGN_OUT'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'

export const REQUESTING_FAILURE = 'REQUESTING_FAILURE'


export const signIn = (data) => {
    return {
        type: SIGN_IN, 
        payload: {data}
    }
}

export const signOut = () => {
    return {type: SIGN_OUT}
}

export const signUp = (data) => {
    return {
        type: SIGN_UP, 
        payload: {data}
    }
}

export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data
    }
}