export const INITIAL = 'INITIAL'
export const REQUESTING_DATA = 'REQUESTING_DATA'
export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS'
export const REQUEST_DATA_FAILURE = 'REQUEST_DATA_FAILURE'

export const reset = () => {
    return {
        type: INITIAL
    }
}

export const requestData = (url) => {
    return {
        type: REQUESTING_DATA,
        payload: { url }
    }
}


