import { combineReducers } from 'redux';
import counter from './counter';
import pageCoverPopup from './pageCoverPopup';

const rootReducer = combineReducers({
    counter,
    pageCoverPopup
});

export default rootReducer;

