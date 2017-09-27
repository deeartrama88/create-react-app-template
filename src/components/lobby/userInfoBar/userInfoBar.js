import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class UserInfoBar extends Component {

    render() {
        return (
            <div className="userInfoBar">
                <div className="flexContainer">
                    <div className="cont left">cont 1</div>
                    <div className="cont center">cont 2</div>
                    <div className="cont right">cont 3</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(UserInfoBar);