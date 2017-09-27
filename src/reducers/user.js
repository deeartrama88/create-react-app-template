import {
    AUTHORIZED,
    UPDATE_TOKEN,
    SAVE_SPECIAL_OFFERS
} from '../actions/constants';

export default (state = {status: 'not authorized'}, action) => {
    switch (action.type) {
        case AUTHORIZED:
            return {...action.payload};

        case UPDATE_TOKEN:
            const stateWithUpdatedToken = {...state};
            stateWithUpdatedToken.userInfo._token = action.payload;
            return stateWithUpdatedToken;

        case SAVE_SPECIAL_OFFERS:
            const stateWithSpecialsOffers = {...state};
            stateWithSpecialsOffers.userInfo.arrayOfSpecialsOffers = action.payload;
            return stateWithSpecialsOffers;

        default:
            return state;
    }
}