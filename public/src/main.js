import React from 'react';
import ReactDom, {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducer from './reducers/index.js';
import App from './containers/App.js';

const middles = [thunk];

const middlewares = applyMiddleware(...middles);

let store = createStore(reducer, middlewares);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
