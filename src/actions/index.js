export const SET_VISIBILITY = 'SET_VISIBILITY'
export const REQUESTING_DATA = 'REQUESTING_DATA'
export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS'
export const REQUEST_DATA_FAILURE = 'REQUEST_DATA_FAILURE'

export const viewInfo = (filter) => {
    return {
        type: SET_VISIBILITY,
        payload: { filter }
    }
}

export const requestData = (url) => {
    return {
        type: REQUESTING_DATA,
        payload: { url }
    }
}

export const requestDataSuccess = (data) => {
    return {
        type: REQUEST_DATA_SUCCESS,
        payload: { data }
    }
}
