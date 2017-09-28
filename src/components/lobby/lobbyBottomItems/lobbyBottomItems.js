import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LobbyBottomItem from './bottomItem';

class LobbyBottomItems extends Component {

    render() {
        return (
            <div className="moreGamesBottom">
                <div className="flexContainer">
                    <div className="cont left">
                        <LobbyBottomItem item={ {name: 'More Games'} }/>
                        <LobbyBottomItem item={ {name: 'Invite'} }/>
                        <LobbyBottomItem item={ {name: 'Send Gifts'} }/>
                    </div>
                    <div className="cont center">
                        <LobbyBottomItem item={ {name: 'Golden Wheel'} }/>
                    </div>
                    <div className="cont right">
                        <LobbyBottomItem item={ {name: 'Social'} }/>
                        <LobbyBottomItem item={ {name: 'Vip Lounge'} }/>
                        <LobbyBottomItem item={ {name: 'Gem Club'} }/>
                    </div>
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

export default connect(mapStateToProps, mathDispatchToProps)(LobbyBottomItems);