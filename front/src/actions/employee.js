// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';

// @constants
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const SET_EMPLOYEE_ID = 'SET_EMPLOYEE_ID';

export const getEmployees = () =>
    dispatch => axios
        .get(config.services.employee.getAll)
        .then(response =>
            dispatch({
                type: GET_EMPLOYEES,
                payload: response
            }))
        .catch(error => Promise.reject(error));

/**
 * @param {string} employeeId
 */
export const setEmployeeId = employeeId =>
    ({
        type: SET_EMPLOYEE_ID,
        payload: employeeId
    });
