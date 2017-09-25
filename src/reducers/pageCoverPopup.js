import {TOGGLE_PAGE_COVER_POPUP} from '../actions/constants';

const initialState = {
    active: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PAGE_COVER_POPUP:
            return {active: action.payload };

        default:
            return state;

    }
}