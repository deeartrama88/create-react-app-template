import axios from 'axios';
import md5 from 'js-md5';
import qs from 'qs';
import {
    AUTHORIZED,
    GATE_INIT_URL,
    GATE_SECRET,
    GATE_REQUEST_URL,
    UPDATE_TOKEN,
    SAVE_SPECIAL_OFFERS
} from './constants';

export const authorized = (value) => {
    return {
        type: AUTHORIZED,
        payload: value
    }
};

export const getInitUserGameToken = (credentials) => {
    return dispatch => {
        // create hash
        const secretHashString = md5(credentials.userInfo.userID + GATE_SECRET + credentials.userInfo.userID);
        // get init token
        axios({
            method: 'get',
            url: GATE_INIT_URL+'?_token=' + secretHashString + '&cid=' + credentials.userInfo.userID,
        }).then(
            result => {
                // when get token - get user data from cms
                const settings = {
                    request: 'getSpecialOffers',
                    cid: credentials.userInfo.userID,
                    os: 'web',
                    _token: result.data._token
                };
                return getSpecialOffersCMS(settings);
            }
        ).then( result => {
            // update user token
            dispatch({type: UPDATE_TOKEN, payload: result.data._token})
            // save special offers to user
            const arrayToSave = {...result.data};
            delete arrayToSave['_token'];
            dispatch({type: SAVE_SPECIAL_OFFERS, payload: arrayToSave})
        })
        .catch( error => console.log(error) );
    };
};

export const getSpecialOffersCMS = (settings) => {
    return new Promise((resolve, reject) => {
            axios.post(
                GATE_REQUEST_URL,
                qs.stringify({...settings})
            )
            .then(function (response) {
                console.log('we get specials offers from cms -');
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        });
};

