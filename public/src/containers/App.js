import { connect } from 'react-redux'
import Counter from '../components/Counter'
import actions from '../actions/counter';

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        counter: state.counter, //是reduers return 的对象
        counterSub: state.counterSubReduce,
    }
};

const fn = () => async dispatch => {
    const a = await Promise.resolve({
        type: 'INCREMENT_COUNTER'
    });
    dispatch(a);
}

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args)),
        decrement: (...args) => dispatch(actions.decrement(...args)),
        thunkFn1: (...args) => {
            console.log(...args);
            const actionType = actions.thunkAction1();
            return dispatch(actionType);
        },
        thunkFn2: (...args) => {
            console.log(...args);
            const actionType = actions.thunkAction2();
            return dispatch(actionType);
        },
        thunkFn: (...args) => {
            console.log(...args);
            const actionType = fn();
            return dispatch(actionType);
        },
        justReRender: () => {
            dispatch({
                type: 'RENDER'
            });
        },
        subRender: (type) => {
            dispatch({
                type: type
            });
        }
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)