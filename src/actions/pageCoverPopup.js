import {TOGGLE_PAGE_COVER_POPUP} from './constants';

export const togglePageCoverPopup = (value) => {
    return {
        type: TOGGLE_PAGE_COVER_POPUP,
        payload: value
    }
};