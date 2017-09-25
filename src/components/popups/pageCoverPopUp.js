import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {togglePageCoverPopup} from '../../actions/pageCoverPopup';


class PageCoverPopUp extends Component {

    render() {
        let displayPopup = this.props.popupSettings.active ? 'flex' : 'none';
        const style = {display: displayPopup};
        return (
            <div style={style} className="allPageCoverPopup">
                <div className="popupContent">
                    <div className="closeButton">
                        {/*<img src="" alt="close"/>*/}
                        <span onClick={ () => this.props.togglePageCoverPopup(false) } className="closePopUp">X</span>
                    </div>
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
        togglePageCoverPopup
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(PageCoverPopUp);