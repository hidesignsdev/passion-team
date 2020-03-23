import { LOAD_DATA_SUCCESS, SET_VISIBILITY } from '../types'

const initialState = {
    information: {},
    visibility: false
}

const fetchGithubReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VISIBILITY:
            return {
                ...state,
                visibility: action.payload.filter
            }
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                information: action.payload.data,
                visibility: true
            }
        default: return state
    }
}

export default fetchGithubReducer