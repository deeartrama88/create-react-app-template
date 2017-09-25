import { combineReducers } from 'redux';
import counter from './counter';
import pageCoverPopup from './pageCoverPopup';
import user from './user';

const rootReducer = combineReducers({
    user,
    counter,
    pageCoverPopup
});

export default rootReducer;

