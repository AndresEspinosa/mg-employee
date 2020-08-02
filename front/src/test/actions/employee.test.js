// @scripts
import { config } from '../../config';

import {
    GET_EMPLOYEES,
    SET_EMPLOYEE_ID,
    getEmployees,
    setEmployeeId
} from '../../actions';

test('getEmployees (http request success)', () => {
    const actionCreator = getEmployees();
    const expectedActions = [{
        type: GET_EMPLOYEES,
        payload: config.mockData.employee
    }];
    return global.testDispatch(actionCreator, expectedActions);
});

test('getEmployees (http request fails)', () => {
    const actionCreator = getEmployees();
    const expectedActions = [];
    return global.testDispatchWithNetworkError(actionCreator, expectedActions);
});

test('setEmployeeId', () => {
    const actionCreator = setEmployeeId('1');
    const expectedActions = [{
        type: SET_EMPLOYEE_ID,
        payload: '1'
    }];
    return global.testDispatch(actionCreator, expectedActions);
});
