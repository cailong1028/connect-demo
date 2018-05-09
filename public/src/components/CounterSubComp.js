/**
 *  Created by cl on 2018/5/9
 */

import React from 'react';
import CounterComp from './Counter';

class CounterSubComp extends React.Component{
    constructor(props){
        super(props);
        //this.props = this.props.parentProps;
        //this.props = props.actions;
    }
    render(){
        return (
            <div>
                <h5>this is sub page</h5>

                父页面通过props传递过来的计数：{this.props.parentProps.counter}

                <hr/>
                {this.props.parentProps.counterSub.a} --> 
                {this.props.parentProps.counterSub.time}

                <button onClick={() => {
                    this.props.parentProps.subRender('T1');
                }}>type T1</button>
                <button onClick={() => {
                    this.props.parentProps.subRender('T2');
                }}>type T2</button>
            </div>
        );
    }
}

export default CounterSubComp;