import {TOGGLE_PAGE_COVER_POPUP} from '../actions/constants';

const initialState = {
    active: false,
    data: '',
    content: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PAGE_COVER_POPUP:
            return {
                ...state,
                active: action.payload.active,
                data: action.payload.data
            };

        default:
            return state;

    }
}