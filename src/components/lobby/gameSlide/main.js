import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GamesAnnouncement from './gameAnnouncement';
import Slider from './slider/slider';


class GamesSlide extends Component {

    render() {
        return (
            <div className="gamesSlider">
                <GamesAnnouncement />
                <Slider />
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

export default connect(mapStateToProps, mathDispatchToProps)(GamesSlide);