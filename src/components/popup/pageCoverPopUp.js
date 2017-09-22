import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class PageCoverPopUp extends Component {

    render() {
        return (
            <div className="allPageCoverPopup">
                <div className="popupContent">
                    <h2> All page cover popup</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popupSettings: state.pageCoverPopup
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        // call here magazine popup
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(PageCoverPopUp);