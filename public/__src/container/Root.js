import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from '../reducer'

import CountContainer from '../container/CountContainer'

const store = createStore(reducer);

class Root extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <CountContainer />
            </Provider>
        );
    }
}

export default Root;