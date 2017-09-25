import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './assets/images/logo.svg';
import './assets/css/app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Lobby from './components/lobby/lobby';
import PageCoverPopUp from './components/popups/pageCoverPopUp';
import {authorized} from './actions/user';

class App extends Component {

    componentWillMount(){

        // at first init - check if user is logged to this app
        // if no - call FB login popup

        this.checkStatusFB();
    }

    checkStatusFB() {
        const __this = this;

        // check status - call or not call login popup
        // in future I suppose gonna be more option depends from this status

        window.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                __this.props.authorized('you are connected (logged to this app)');
                const uid = response.authResponse.userID,
                        accessToken = response.authResponse;
                console.log('user id = ' + uid + ' user authResponse = ' + accessToken);

            } else if (response.status === 'not_authorized') {
                __this.props.authorized('not authorized');
                __this.callLoginFB();
            } else {
                __this.props.authorized('user is not logged in to facebook');
            }
        });
    }

    callLoginFB() {
        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                window.FB.api('/me', function(response) {
                    console.log(response);
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <span>{this.props.user.status}</span>
                </div>

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
        user: state.user
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        authorized
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(App);
