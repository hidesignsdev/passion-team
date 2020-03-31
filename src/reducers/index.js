import { combineReducers } from 'redux';

import { INITIAL, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILURE, REQUESTING_DATA } from '../actions'

const initialState = {
    information: {},
    isLoading: false,
    error: false,
    visibility: false
}

const fetchGithubReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIAL:
            return {
                ...state,
                isLoading: false,
                error: false,
                visibility: false
            }
        case REQUESTING_DATA:
            return {
                ...state,
                isLoading: true
            }
        case REQUEST_DATA_SUCCESS:
            return {
                ...state,
                information: action.payload.data,
                isLoading: false,
                error: false,
                visibility: true
            }
        case REQUEST_DATA_FAILURE:
            return {
                ...state,
                information: {},
                isLoading: false,
                error: true,
                visibility: false
            }
        default: return state
    }
}


const rootReducer = combineReducers({
    githubUser: fetchGithubReducer
})

export default rootReducer