import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {togglePageCoverPopup} from '../../actions/pageCoverPopup';

import '../../assets/css/header.css';
import BestCasinoLogo from '../../assets/images/best_casino_menu_logo.png';
import {fetchUserData} from '../../actions/sharedFuncs';


class Header extends Component {
    constructor(props){
        super(props);

        this.facebookAction = this.facebookAction.bind(this);
    }

    goFullScreen(){
        if(document.body.requestFullScreen) {
            document.body.requestFullScreen();
        } else if(document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        } else if(document.body.webkitRequestFullScreen) {
            document.body.webkitRequestFullScreen();
        }
    }

    facebookAction(){
        console.log('facebook action');
        const payload = {
            active: true,
            data: 'user info'
        };
        this.props.togglePageCoverPopup(payload);
    }

    promiseTest(){
        fetchUserData().then(
            result => {
                alert("Fulfilled: " + result);
            },
            error => {
                alert("Rejected: " + error);
            });
    }

    render() {
        return (
            <header className="header">
                <div className="menu">
                    <img src={BestCasinoLogo} alt="Best Casino"/>
                    <ul>
                        <li onClick={this.promiseTest}>Buy Coins</li>
                        <li onClick={this.facebookAction}>LeadBoard</li>
                        <li onClick={this.goFullScreen }>Events(fullScreen mode)</li>
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