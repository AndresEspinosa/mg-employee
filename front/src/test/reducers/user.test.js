// @scripts
import { LOGIN, UPDATE_LANGUAGE } from '../../actions';
import { config } from '../../config';
import { userReducer } from '../../reducers/user';

test('userReducer: LOGIN', () => {
    const action = {
        type: LOGIN,
        payload: config.mockData.securityLogin
    };
    const newState = userReducer(config.initialState.user, action);
    const {
        authToken,
        avatarUrl,
        clientId,
        clientName,
        email,
        languageCode,
        name,
        permissions,
        roles,
        userId
    } = action.payload;
    const expectedState = Object.assign({}, config.initialState.user, {
        account: {
            authToken,
            avatarUrl,
            clientId,
            clientName,
            email,
            name,
            permissions,
            roles,
            userId
        },
        languageCode
    });
    expect(newState).toEqual(expectedState);
});

test('userReducer: UPDATE_LANGUAGE', () => {
    const newLanguageCode = 'en';
    const action = {
        type: UPDATE_LANGUAGE,
        payload: newLanguageCode
    };
    const newState = userReducer(config.initialState.user, action);
    const expectedState = Object.assign({}, config.initialState.user, {
        languageCode: newLanguageCode
    });
    expect(newState).toEqual(expectedState);
});

test('userReducer: DEFAULT', () => {
    const initialState = {
        account: {
            authToken: '91AE2B60-A22E-43BA-B550-5D459A6A5F92',
            email: 'user@email.com',
            name: 'Admin',
            permissions: ['Permission1', 'Permission2']
        },
        languageCode: 'en'
    };
    const action = {
        type: 'UNLISTENED_ACTION'
    };
    const newState = userReducer(initialState, action);
    expect(newState).toEqual(initialState);
});
