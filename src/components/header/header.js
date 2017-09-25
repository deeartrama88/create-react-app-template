import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {togglePageCoverPopup} from '../../actions/pageCoverPopup';

import '../../assets/css/header.css';
import BestCasinoLogo from '../../assets/images/best_casino_menu_logo.png';


class Header extends Component {

    goFullScreen(){
        if(document.body.requestFullScreen) {
            document.body.requestFullScreen();
        } else if(document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        } else if(document.body.webkitRequestFullScreen) {
            document.body.webkitRequestFullScreen();
        }
    }

    render() {
        return (
            <header className="header">
                <div className="menu">
                    <img src={BestCasinoLogo} alt="Best Casino"/>
                    <ul>
                        <li onClick={ () => this.props.togglePageCoverPopup(true) }>Buy Coins</li>
                        <li>LeaderBoard</li>
                        <li onClick={this.goFullScreen }>Events</li>
                    </ul>
                </div>
                <div className="top_buy">

                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        togglePageCoverPopup
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Header);