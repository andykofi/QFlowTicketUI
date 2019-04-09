import _ from 'lodash';
import {
    FETCH_TICKET,
    CREATE_TICKET,
    FETCH_TICKETS,
    DELETE_TICKET,
    EDIT_TICKET
} from '../actions/types'


// CRUD reducer
export default (state = {}, action) => {
    switch (action.type) {

        case FETCH_TICKETS:
            return { ...state, ..._.mapKeys(action.payload, 'id')} ;
        case FETCH_TICKET:
            return { ...state, [action.payload.id] : action.payload };

        case CREATE_TICKET:
            return { ...state, [action.payload.id] : action.payload };

        case EDIT_TICKET:
            return { ...state, [action.payload.id] : action.payload };
        case DELETE_TICKET:
            return _.omit(state, action.payload)

        default:
            return state;

    }
}
