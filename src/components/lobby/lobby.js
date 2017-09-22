import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LobbyImg from '../../assets/images/lobby.png';
import sideBanner from '../../assets/images/sideBanner.png';


class Lobby extends Component {

    render() {
        return (
            <div className="lobby">
                <img id='lobby' src={LobbyImg} alt="lobby"/>

                <div className="sideBanner">
                    <img src={sideBanner} alt="get more"/>
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

export default connect(mapStateToProps, mathDispatchToProps)(Lobby);