import {connect} from 'react-redux';

import Counter from '../components/Counter';

const mapStateToProps = (state) => {
    return {
        countNumber: state.count2.countNumber
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => dispatch({type: 'add'}),
        reduce: () => dispatch({type: 'reduce'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

