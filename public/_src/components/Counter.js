import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';

export default class Counter extends Component{
    render(){
        let {add, reduce, countNumber} = this.props;
        return (
            <p>
            {countNumber}
            {' '}
            <button onClick={add}>+</button>
            {' '}
            <button onClick={reduce}>-</button>
            </p>
        );
    }
}