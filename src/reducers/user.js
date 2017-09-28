import {
    AUTHORIZED,
    UPDATE_TOKEN,
    SAVE_SPECIAL_OFFERS
} from '../actions/constants';

const initialState = {
  status: 'not authorized',
  userInfo: {
      picture: '',
      progress: 30,
      level: 4
  }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZED:
            const initObj = Object.assign({}, state, action.payload);
            initObj.userInfo = Object.assign({}, state.userInfo, action.payload.userInfo);
            return initObj;

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