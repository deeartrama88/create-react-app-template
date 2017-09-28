import React from 'react';

// profile img with level
export const ProfileImg = (props) => {
    return (
        <div className="userProfile">
            <div className="wrap">
                <img src={props.profileImg} alt="avatar"/>
                <div className="profileLevel">{props.level}</div>
            </div>
        </div>
    )
};

// user xp bar
export const UserXPBar = (props) => {
    const styleProgress = {width: props.progressBar + '%'};
    const stylePercent = {left: (+props.progressBar - 6) + '%'};
    return (
        <div className="userXP">
            <div
                className="userXPProgress"
                style={styleProgress}>
            </div>
            <div
                className="userXPProgressPercents"
                style={stylePercent}>
                    {props.progressBar + '%'}
            </div>
        </div>
    )
};

//bankRoll
export const BankRoll = (props) => {
    return (
        <div className="bankRoll">
            <div className="amount">
                ${props.amount}
                <img className="userBarUSAicon" src={props.usaCoinImg} alt="$"/>
            </div>
        </div>
    )
};

// lucky coins
export const UserBarLuckyCoins = (props) => {
  return (
      <div className="userBarLuckyCoins">
          <div className="userLuckyCoinAmount"> {props.userLuckyCoinsAmount} </div>
          <img className="luckyCoinsIcon" src={props.luckyCoinsIcon} alt="lucky Coins"/>
      </div>
  )
};

// piggy kitty bank
export const UserBarKittyBank = (props) => {
  return (
      <div className="userBarKittyBank">
          <div className="wrap">
              <img src={props.kittyBankImg} alt="Kitty Bank"/>
              <div className="amount"> ${props.kittyBankAmount} </div>
          </div>
      </div>
  )
};
