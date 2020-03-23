import { combineReducers } from 'redux';
import fetchGithubReducer from './fetchGithubReducer';

const rootReducer = combineReducers({
    githubUser: fetchGithubReducer
})

export default rootReducer