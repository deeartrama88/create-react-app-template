import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class MainShop extends Component {

    render() {
        return (
            <div className="mainShop">
                <h1>Main Shop</h1>
            </div>
        );
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        // call here magazine popups
    }, dispatch);
}

export default connect(mathDispatchToProps)(MainShop);