// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGIN } from '../actions';
import { config } from '../config';

/**
 * @return {{email: string, name: string, permissions: string[]}}
 */
const accountReducer = (
    state = config.initialState.user.account, action
) => {
    switch (action.type) {
        case LOGIN:
            const {
                authToken,
                avatarUrl,
                clientId,
                clientName,
                email,
                name,
                permissions,
                roles,
                userId
            } = action.payload;
            return {
                authToken,
                avatarUrl,
                clientId,
                clientName,
                email,
                name,
                permissions,
                roles,
                userId
            };
        default:
            return state;
    }
};

/**
 * @return {string}
 */
const languageCodeReducer = (
    state = config.initialState.user.languageCode, action
) => {
    switch (action.type) {
        case LOGIN:
            return action.payload.languageCode;
        default:
            return state;
    }
};

export const userReducer = combineReducers({
    account: accountReducer,
    languageCode: languageCodeReducer
});
