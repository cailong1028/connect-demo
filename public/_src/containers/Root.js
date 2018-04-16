import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import ConnectCounter from './ConnectCounter';
import reducers from '../reducers';
import News from '../router/News';

const store = createStore(reducers);

export default class Root extends Component{

    render(){
        return (
            <Provider store={store}>
                <ConnectCounter/>
            </Provider>
        );
    }
}
