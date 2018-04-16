import React, {Component} from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        count: state.count
    }
};

function mapDispatchToProps(dispatch, ownProps){
    return {
        add: () => dispatch({type: 'add'}),
        reduce: () => dispatch({type: 'reduce'})
    }
}

class CountContainer extends React.Component{

    render(){
        const {count, add, reduce} = this.props;1
        return (
            <div>
                &&&&&&&
                {count}
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer);