import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {togglePageCoverPopup} from '../../actions/pageCoverPopup';
import MainShop from '../mainShop';


class PageCoverPopUp extends Component {
    constructor(props) {
        super(props);

        this.closePopup = this.closePopup.bind(this);
    }

    closePopup(){
        const data = {
            ...this.props.popupSettings,
            active: false
        };
        this.props.togglePageCoverPopup(data);
    }

    render() {
        // const content
        let displayPopup = this.props.popupSettings.active ? 'flex' : 'none';
        const style = {display: displayPopup};
        return (
            <div style={style} className="allPageCoverPopup">
                <div className="popupContent">
                    <div onClick={this.closePopup} className="closeButton">
                        <span className="closePopUp">X</span>
                    </div>
                    <h2> All page cover popup</h2>
                    {/* set data via inner html */}
                    <div className="popupData" dangerouslySetInnerHTML={{__html: this.props.popupSettings.data}}></div>
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