import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import sideBanner from '../assets/images/sideBanner.png';


class SideBanner extends Component {

    render() {
        return (
            <div className="sideBanner">
                <img src={sideBanner} alt="get more"/>
            </div>
        );
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        // call here magazine popup
    }, dispatch);
}

export default connect(mathDispatchToProps)(SideBanner);