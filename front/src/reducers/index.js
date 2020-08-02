// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGOUT } from '../actions';
import { appVersionReducer } from './app-version';
import { employeeReducer } from './employee';
import { loadingPageReducer } from './loading-page';
import { mainMenuReducer } from './main-menu';
import { modalDialogReducer } from './modal-dialog';
import { toastNotificationReducer } from './toast-notification';
import { userReducer } from './user';

const appReducer = combineReducers({
    appVersion: appVersionReducer,
    employee: employeeReducer,
    loadingPage: loadingPageReducer,
    mainMenu: mainMenuReducer,
    modalDialog: modalDialogReducer,
    toastNotification: toastNotificationReducer,
    user: userReducer
});

/**
 * We wrap the appReducer into this rootReducer in order to easily
 * handle the LOGOUT event, on which we should reset the state back
 * to the to initial state.
 * @param {Object} state - Current application state.
 * @param {Object} action - Current dispatched action.
 * @return {Object}
 */
export const rootReducer = (state, action) => {
    const currentState = (action.type === LOGOUT)
        ? undefined
        : state;
    return appReducer(currentState, action);
};
