import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {togglePageCoverPopup} from '../../actions/pageCoverPopup';
import QuickBuy from './quickBuyItem';
import '../../assets/css/header.css';
import BestCasinoLogo from '../../assets/images/best_casino_menu_logo.png';
// import {fetchUserData} from '../../actions/sharedFuncs';


class Header extends Component {
    constructor(props){
        super(props);

        //this.facebookAction = this.facebookAction.bind(this);
    }

    // goFullScreen(){
    //     const element = document.querySelector('#testID');
    //     console.log(element);
    //     if(element.requestFullScreen) {
    //         element.requestFullScreen();
    //     } else if(element.mozRequestFullScreen) {
    //         element.mozRequestFullScreen();
    //     } else if(element.webkitRequestFullScreen) {
    //         element.webkitRequestFullScreen();
    //     }
    // }

    // facebookAction(){
    //     console.log('facebook action');
    //     const payload = {
    //         active: true,
    //         data: 'user info'
    //     };
    //     this.props.togglePageCoverPopup(payload);
    // }

    // promiseTest(){
    //     fetchUserData().then(
    //         result => {
    //             alert("Fulfilled: " + result);
    //         },
    //         error => {
    //             alert("Rejected: " + error);
    //         });
    // }

    render() {
        return (
            <header className="header">
                <div className="flexContainer">
                    <div className="cont left">
                        <div className="headerBlock fbLike">like on FB</div>
                        <div className="headerBlock downloadMobileApp">Download</div>
                    </div>
                    <div className="cont center">
                        <img src={BestCasinoLogo} alt="Best Casino"/>
                    </div>
                    <div className="cont right">
                        <QuickBuy/>
                        <div className="headerBlock oldLook">Old look</div>
                        <div className="headerBlock hd">HD</div>
                    </div>
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