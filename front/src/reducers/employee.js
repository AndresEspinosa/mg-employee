// @packages
import { combineReducers } from 'redux';

// @scripts
import { GET_EMPLOYEES, SET_EMPLOYEE_ID } from '../actions';
import { config } from '../config';

/**
 * @return id: string
 */
const idReducer = (
    state = config.initialState.employee.id, action
) => {
    switch (action.type) {
        case SET_EMPLOYEE_ID:
            return action.payload;
        default:
            return state;
    }
};

/**
 * @return {string}
 */
const itemsReducer = (
    state = config.initialState.employee.items, action
) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return action.payload;
        default:
            return state;
    }
};

export const employeeReducer = combineReducers({
    id: idReducer,
    items: itemsReducer
});
