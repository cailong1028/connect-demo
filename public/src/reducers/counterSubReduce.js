/**
 *  Created by cl on 2018/5/9
 */

export default function(state={
    a: 0,
    b: 0,
    time: new Date().getTime()
}, action){
    switch (action.type){
        case 'T1':
            return {
                time: new Date().getTime(),
                a: 1,
                b: 2
            }
        case 'T2':
            return {
                time: new Date().getTime(),
                a: 3,
                b: 4
            }
        //当使用redux combinReduers的时候，会把所有的reduer都走一遍，没有匹配的时候就会走dufault，
        default:
            return state;
    }
}