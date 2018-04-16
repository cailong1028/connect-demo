export default function count(state = {countNumber: 0}, action){
    switch(action.type){
        case 'add':
            return {countNumber: state.countNumber + 1};
        case 'reduce':
            return {countNumber: state.countNumber - 1};
        default:
            return {countNumber: state.countNumber};
    }
}