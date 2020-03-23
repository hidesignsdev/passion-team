import { LOAD_DATA_SUCCESS, SET_VISIBILITY } from '../types'

const isBlank = /^\s*$/

export const viewInfo = (filter) => {
    return {
        type: SET_VISIBILITY,
        payload: { filter }
    }
}

export const fetchInfo = (URL) => {
    return dispatch => {
        if (isBlank.test(URL)) dispatch(viewInfo(false))
        fetch(URL)
            .then(res => {
                if (res.ok) return res.json()
                else throw new Error('Request failed.')
            })
            .then(data => {
                dispatch({ type: LOAD_DATA_SUCCESS, payload: { data } })
            })
            .catch(err => console.log(err))
    }
}
