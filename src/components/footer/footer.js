import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../assets/css/footer.css';


class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <ul>
                    <li>Earn Coins</li>
                    <li>Leader Board</li>
                    <li>Terms of Service</li>
                    <li>Support</li>
                    <li>Fan Page</li>
                </ul>
            </footer>
        );
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        //will call here pop ups like in header
    }, dispatch);
}

export default connect(mathDispatchToProps)(Footer);