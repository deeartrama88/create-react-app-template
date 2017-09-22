import {INCREMENT, DECREMENT} from './constants';

export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
};

export const incrementAsync = (value) => {
    return dispatch => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(increment(value));
        }, 1000);
    };
};