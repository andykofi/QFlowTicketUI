import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import ticketReducer from './ticketReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    tickets: ticketReducer
});

/**
 * For redux forms we need an already made reducer which we have imported here
 * import { reducer } from 'redux-form'; The first step after installing redux form
 *
 */

