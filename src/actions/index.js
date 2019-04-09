import tickets from '../apis/tickets';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TICKET,
    FETCH_TICKETS,
    FETCH_TICKET,
    DELETE_TICKET,
    EDIT_TICKET
} from './types';

export const signIn = (userId) => {

    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {

    return {
        type: SIGN_OUT
    };
};
/**
 * We are creating tickets using the form input values
 * and axios from tickets.js
 * @param formValues
 *
 *
 * Making a request to a tickets end point which is the db.json [] and adding form values.
 * The history object is added to help us navigate programmatically
 */
export const createTicket = formValues => async (dispatch, getState) => {
    const { userId }  = getState().auth;

    const response = await tickets.post('/tickets', { ...formValues, userId } );

    // now we need a reducer to save the CREATE_STREAM in the app level state
    dispatch({type: CREATE_TICKET, payload: response.data });
    history.push('/')
};

export const fetchTickets = () =>  async dispatch => {
    const response = await tickets.get('/tickets');

    dispatch({ type:FETCH_TICKETS, payload: response.data });

};

export const fetchTicket = (id) => async dispatch => {
    const response = await tickets.get(`/tickets/${id}`);

    dispatch({ type: FETCH_TICKET, payload:response.data });
};

export const editTicket = (id, formValues) => async dispatch => {
    const response = await tickets.patch(`/tickets/${id}`, formValues);

    dispatch({ type: EDIT_TICKET, payload: response.data });
    history.push('/')
};

export const deleteTicket = (id) => async  dispatch => {
    await tickets.delete(`/tickets/${id}`);

    dispatch({ type:DELETE_TICKET, payload:id });
    history.push('/')
};




