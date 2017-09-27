import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import LobbyImg from '../../assets/images/lobby.png';
import UserInfoBar from './userInfoBar/userInfoBar';
import GamesSlide from './gameSlide/main';
import MoreGamesBottom from './moreGameBottom/moreGameBottom';
// import sideBanner from '../../assets/images/sideBanner.png';


class Lobby extends Component {

    render() {
        return (
            <div className="lobby">

                {/*<object>*/}
                        {/*<embed*/}
                            {/*id="testID"*/}
                            {/*allowFullScreen="true"*/}
                            {/*src="https://bestcasino.diwip.com/swf/loader_icons.swf"*/}
                            {/*width="600"*/}
                            {/*height="600">*/}
                        {/*</embed>*/}
                {/*</object>*/}

                <UserInfoBar />

                <GamesSlide />

                <MoreGamesBottom />

                {/*<img id='lobby' src={LobbyImg} alt="lobby"/>*/}

                {/*<div className="sideBanner">*/}
                    {/*<img src={sideBanner} alt="get more"/>*/}
                {/*</div>*/}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        //specialOffers: state.user.userInfo.specialOffers
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Lobby);