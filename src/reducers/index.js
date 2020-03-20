import { combineReducers } from 'redux';
import quoteGenarateReducer from './quoteGenarateReducer';

const rootReducer = combineReducers({
    quoteGenarate: quoteGenarateReducer
})

export default rootReducer;
