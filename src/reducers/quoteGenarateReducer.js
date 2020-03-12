import {NEW_QUOTE} from '../actions';

const initialState = {
    author: '',
    content: ''
}

const quoteGenarateReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_QUOTE:
            const {author, content} = action.quote
            return {...state, author, content}
        default: return state;
    }
}

export default quoteGenarateReducer;