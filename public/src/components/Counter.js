import React, {Component} from 'react'

import CounterSubComp from './CounterSubComp';

class Counter extends Component {
    constructor(props){
        super();
        this.renderCnt = 0;
        this.state = {
            a: 1,
            b: 2
        }
    }
    render() {
        console.log(`render times --> ${++this.renderCnt}`);
        //从组件的props属性中导入四个方法和一个变量
        // const {increment, decrement, counter} = this.props;
        //渲染组件，包括一个数字，四个按钮
        return (
            <div>
                Clicked: {this.props.counter} times
                {' '}
                <button onClick={this.props.increment}>+</button>
                {' '}
                <button onClick={this.props.decrement}>-</button>
                {' '}

                <hr/>
                <div>
                    <button onClick={() => {this.props.thunkFn(1,2)}}>thunk button</button>
                </div>
                <div>
                    <button onClick={() => {this.props.thunkFn1(1,2)}}>thunk button1</button>
                </div>
                <div>
                    <button onClick={() => {this.props.thunkFn2(1,2)}}>thunk button2</button>
                </div>

                <hr/>
                <div>
                    <div>渲染次数{this.renderCnt}</div>
                    <button onClick={() => {
                            this.setState({});
                        }}>使用setState刷新页面</button>
                </div>

                <hr/>
                <div>
                    <button onClick={this.props.justReRender}>计数清零(使用dispatch刷新页面而不是setState)</button>
                </div>

                <hr/>

                下面是子页面
                <CounterSubComp parentProps={this.props}></CounterSubComp>
            </div>
        )
    }
}

export default Counter