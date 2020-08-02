// @scripts
import { config } from '../../config';
import { decodeBase64String } from '../../util';

import {
    LOGIN,
    LOGOUT,
    login,
    logout
} from '../../actions';

test('login (http request success)', () => {
    const credentials = {
        email: config.settings.serviceMocker.loginEmail,
        password: decodeBase64String(
            config.settings.serviceMocker.loginPassword
        )
    };
    const actionCreator = login(credentials);
    const expectedActions = [{
        type: LOGIN,
        payload: config.mockData.securityLogin
    }];
    return global.testDispatch(actionCreator, expectedActions);
});

test('login (http request fails)', () => {
    const credentials = {
        email: config.settings.serviceMocker.loginUser,
        password: decodeBase64String(
            config.settings.serviceMocker.loginPassword
        )
    };
    const actionCreator = login(credentials);
    const expectedActions = [];
    return global.testDispatchWithNetworkError(actionCreator, expectedActions);
});

test('logout', () => {
    const actionCreator = logout();
    const expectedActions = [{
        type: LOGOUT
    }];
    return global.testDispatch(actionCreator, expectedActions);
});
