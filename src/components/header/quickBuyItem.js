import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



class QuickBuy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [
                { value: '1000', label: 'Get 1000 Coins for 10 USD' },
                { value: '2000', label: 'Get 2000 Coins for 20 USD' }
            ],
            selected: { value: '2000', label: 'Get 2000 Coins for 20 USD' }
        };

        this.logChange = this.logChange.bind(this);
    }

    logChange(val) {
        console.log("Selected: " + JSON.stringify(val));
        this.setState({selected: val});
    }

    render() {

        return (
            <div className="headerBlock quickBuy">
                <Select
                    name="quickBuy"
                    value={this.state.selected}
                    options={this.state.options}
                    clearable={false}
                    onChange={this.logChange}/>
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

export default connect(mapStateToProps, mathDispatchToProps)(QuickBuy);