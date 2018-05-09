/**
 * Created by lipeishang on 17-4-28.
 */
import { combineReducers } from 'redux';
import counter from './counter';
import counterSubReduce from './counterSubReduce';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    counter,
    counterSubReduce,
});

export default rootReducer;