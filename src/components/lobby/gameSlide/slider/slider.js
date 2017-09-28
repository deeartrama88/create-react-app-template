import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SlideItem from './slideItem';


class Slider extends Component {

    render() {
        return (
            <div className="slider">
                <div className="flexContainer">
                    <SlideItem item={ {name: 'Promo Area'} }/>
                    <SlideItem item={ {name: 'Social Slots'} }/>
                    <SlideItem item={ {name: 'Video Slots'} }/>
                    <SlideItem item={ {name: 'Featured Games'} }/>
                    <div className="slideArrow"> > </div>
                </div>
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

export default connect(mapStateToProps, mathDispatchToProps)(Slider);