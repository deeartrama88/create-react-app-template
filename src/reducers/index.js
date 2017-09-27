import { combineReducers } from 'redux';
import pageCoverPopup from './pageCoverPopup';
import user from './user';

const rootReducer = combineReducers({
    user,
    pageCoverPopup
});

export default rootReducer;

