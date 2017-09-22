import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment, decrement, incrementAsync} from '../actions/counter';
import '../assets/css/counter.css';
class Counter extends Component {

    render() {
        return (
            <div className="Counter">
                <h1>Counter:</h1>
                <div className="value">{this.props.counter}</div>
                <div className="button">
                    <button onClick={ () => this.props.decrement() }>-</button>
                    <button onClick={ () => this.props.increment() }>+</button>
                    <button onClick={ () => this.props.incrementAsync() }>increment async</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        increment,
        decrement,
        incrementAsync
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Counter);