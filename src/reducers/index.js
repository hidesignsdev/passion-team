import { combineReducers } from 'redux';

import { SET_VISIBILITY, REQUEST_DATA_SUCCESS } from '../actions'

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
        case REQUEST_DATA_SUCCESS:
            return {
                ...state,
                information: action.payload.data,
                visibility: true
            }
        default: return state
    }
}


const rootReducer = combineReducers({
    githubUser: fetchGithubReducer
})

export default rootReducer