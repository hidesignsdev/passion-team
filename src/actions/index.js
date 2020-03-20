import { LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from '../types'

const isBlank = /^\s*$/

export const fetchInfo = (URL) => {
    return dispatch => {
        if (isBlank.test(URL)) dispatch({ type: LOAD_DATA_FAILURE })
        fetch(URL)
            .then(res => {
                if (res.ok) return res.json()
                else throw new Error('Request failed.')
            })
            .then(data => {
                dispatch({ type: LOAD_DATA_SUCCESS, payload: { data } })
            })
            .catch(err => dispatch({ type: LOAD_DATA_FAILURE }))
    }
}
