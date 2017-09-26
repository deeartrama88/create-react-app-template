import {AUTHORIZED} from '../actions/constants';

export default (state = {status: 'not authorized'}, action) => {
    switch (action.type) {
        case AUTHORIZED:
            return {...action.payload};

        default:
            return state;
    }
}