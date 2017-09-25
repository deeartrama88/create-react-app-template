import {AUTHORIZED} from './constants';

export const authorized = (value) => {
    return {
        type: AUTHORIZED,
        payload: value
    }
};

// export const incrementAsync = (value) => {
//     return dispatch => {
//         setTimeout(() => {
//             // Yay! Can invoke sync or async actions with `dispatch`
//             dispatch(increment(value));
//         }, 1000);
//     };
// };
