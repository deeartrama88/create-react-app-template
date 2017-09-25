import {TOGGLE_PAGE_COVER_POPUP} from '../actions/constants';

const initialState = {
    active: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PAGE_COVER_POPUP:
            console.log('popup status => ' + action.payload);
            return {active: action.payload };

        default:
            return state;

    }
}