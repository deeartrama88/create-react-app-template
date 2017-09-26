import axios from 'axios';
import md5 from 'js-md5';
import {AUTHORIZED, GATE_INIT_URL, GATE_SECRET} from './constants';

export const authorized = (value) => {
    return {
        type: AUTHORIZED,
        payload: value
    }
};

export const getUserGameToken = (credentials) => {
    return dispatch => {
        const secretHashString = md5(credentials.userInfo.userID + GATE_SECRET + credentials.userInfo.userID);
        axios({
            method: 'get',
            url: GATE_INIT_URL+'?_token=' + secretHashString + '&cid=' + credentials.userInfo.userID,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(
            result => {
                console.log(result);
            }
        );
    };
};
