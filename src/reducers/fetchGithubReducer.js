import { LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from '../types'

const initialState = {
    information: {},
    visibility: false
}

const fetchGithubReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_DATA_FAILURE:
            return {
                ...state,
                visibility: false
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