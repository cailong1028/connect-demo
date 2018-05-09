module.exports = {
    increment : ()=> {
        return {
            type: 'INCREMENT_COUNTER',
        }
    },
    decrement : ()=> {
        return {type: 'DECREMENT_COUNTER'}
    },
    thunkAction1: (...args) => async dispatch => {
        console.log(`--- ${args}`);
        const pro = await new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    type: 'DECREMENT_COUNTER'
                });
            }, 100);
        });
        return dispatch(pro);
    },
    thunkAction2: (arg1, arg2) => {
        return async (dispatch) => {
            console.log(`--- ${arg1}`);
            const pro = await new Promise((res, rej) => {
                setTimeout(() => {
                    res({
                        type: 'INCREMENT_COUNTER'
                    });
                }, 100);
            });
            return dispatch(pro);
        }
    },
};