// @scripts
import { GET_EMPLOYEES, SET_EMPLOYEE_ID } from '../../actions';
import { config } from '../../config';
import { employeeReducer } from '../../reducers/employee';

test('employeeReducer: GET_EMPLOYEES', () => {
    const action = {
        type: GET_EMPLOYEES,
        payload: config.mockData.employee
    };
    const newState = employeeReducer(config.initialState.employee, action);
    const expectedState = Object.assign({}, config.initialState.employee, {
        items: action.payload
    });
    expect(newState).toEqual(expectedState);
});

test('employeeReducer: SET_EMPLOYEE_ID', () => {
    const action = {
        type: SET_EMPLOYEE_ID,
        payload: '1'
    };
    const newState = employeeReducer(config.initialState.employee, action);
    const expectedState = Object.assign({}, config.initialState.employee, {
        id: action.payload
    });
    expect(newState).toEqual(expectedState);
});

test('employeeReducer: DEFAULT', () => {
    const initialState = {
        id: null,
        items: []
    };
    const action = {
        type: 'UNLISTENED_ACTION'
    };
    const newState = employeeReducer(initialState, action);
    expect(newState).toEqual(initialState);
});
