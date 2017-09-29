import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    UserBarLuckyCoins,
    UserBarKittyBank,
    ProfileImg,
    UserXPBar,
    BankRoll
} from './userBarElements/userBarElements';
// import {CSSTransitionGroup} from 'react-transition-group'
import CoinUSAUrl from '../../../assets/images/coin-us-dollar-icon.png';
import KittyIconImg from '../../../assets/images/Piggy-Bank-golden.ico';

const style = {
    transition: 'all .3s ease-out',
    overflow: 'hidden',
    margin: 0,
    padding: 0
};

class UserInfoBar extends Component {

    constructor(props) {
        super(props);

        this.state = { height: 0 };

        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle() {
        this.setState({height: this.state.height === 0 ? 118 : 0});
    }

    openShop() {

    }

    render() {
        return (
            <div className="userInfoBar">
                <div className="flexContainer">
                    <div className="cont left">
                        <div className="flexContainer">

                            <ProfileImg
                                level={this.props.userInfo.level}
                                profileImg={this.props.userInfo.picture}/>

                            <div className="wrap">
                                <UserXPBar progressBar="30"/>
                                <BankRoll
                                    amount="23434"
                                    usaCoinImg={CoinUSAUrl}/>
                            </div>

                            <UserBarLuckyCoins
                                userLuckyCoinsAmount="345"
                                luckyCoinsIcon={CoinUSAUrl}/>

                        </div>
                    </div>

                    <div className="cont center">
                        <button className="userBarMagazineButton" onClick={this.openShop}> More Coins</button>
                    </div>

                    <div className="cont right">
                        <button className="userBarHourlyBonus"> hourly bonus</button>

                        <UserBarKittyBank
                            kittyBankImg={KittyIconImg}
                            kittyBankAmount="14.04M"/>

                        <div className="userBarMenu">
                            <button onClick={this.menuToggle} className="openUserBarMenu">menu</button>
                            <div className="menu_" style={ {...style, height: this.state.height} }>
                                <ul>
                                    <li>lobby</li>
                                    <li>settings</li>
                                    <li>store</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.user.userInfo
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(UserInfoBar);