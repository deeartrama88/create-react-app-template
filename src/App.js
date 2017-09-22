import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Lobby from './components/lobby/lobby';
import PageCoverPopUp from './components/popup/pageCoverPopUp';

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <span>Welcome to React</span>
                </div>

                <div className="allPageWrapper">

                    <PageCoverPopUp />

                    <Header />

                    <Lobby />

                    <Footer />

                </div>

            </div>
        );
    }
}

export default App;
