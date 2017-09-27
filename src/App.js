import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './assets/css/app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Lobby from './components/lobby/lobby';
import PageCoverPopUp from './components/popups/pageCoverPopUp';
import {authorized, getInitUserGameToken} from './actions/user';
import {togglePageCoverPopup} from './actions/pageCoverPopup';
import {fetchUserData, callFBLogin} from "./actions/sharedFuncs";

class App extends Component {

    componentDidMount(){

        // at first init - check if user is logged to this app
        // if no - call FB login

        this.checkStatusFB();
    }

    saveUser(userData) {

        // call popup to show user data
        this.props.togglePageCoverPopup({
            ...this.props.popupSettings,
            active: true,
            data: userData.userHtmlString
        });

        // save user data to the store
        this.props.authorized(userData);

        // call first init request to 'Gate'

    }

    checkStatusFB() {
        const __this = this;
        // check user at first time page loading
        fetchUserData().then(
            result => {
                if (!result) {
                    callFBLogin().then(
                        result => {
                            if (result) {
                                __this.saveUser(result);
                            }else{
                                // here we should ask and wait when user will login (create popup and login button)
                                alert('please LOGIN to continue - ' + result);
                            }
                        }
                    )
                }else{
                    __this.saveUser(result);
                    // if user logged - get init Token
                    __this.props.getInitUserGameToken(result);
                }
            },
            error => {
                alert("Rejected: " + error);
            }
        )
    }

    render() {
        return (
            <div className="App">

                <PageCoverPopUp />

                <div className="allPageWrapper">

                    <Header />

                    <Lobby />

                    <Footer />

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popupSettings: state.pageCoverPopup,
        user: state.user
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        authorized,
        getInitUserGameToken,
        togglePageCoverPopup
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(App);
