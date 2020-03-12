import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import RandomQuoteMachine from './RandomQuoteMachine';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <RandomQuoteMachine />
    </Provider>, 
    document.getElementById('root')
);

