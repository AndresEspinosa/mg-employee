// @scripts
import { addAjaxInterceptors } from './ajax-interceptors';
import { config } from '../config';
import { constants } from './constants';
import { initializeGlobalUI } from './global-ui';
import { initializeReduxStore } from './redux-store';
import { initializeServiceMocker } from './service-mocker';

// @exports
export * from './constants';

const getEnvironment = () => ({
    isDevelopment: config.settings.environment.name ===
        constants.environment.DEVELOPMENT,
    isLocal: config.settings.environment.name ===
        constants.environment.LOCAL,
    isProduction: config.settings.environment.name ===
        constants.environment.PRODUCTION,
    isQa: config.settings.environment.name ===
        constants.environment.QA,
    isStaging: config.settings.environment.name ===
        constants.environment.STAGING,
    isUnitTest: config.settings.environment.name ===
        constants.environment.UNIT_TEST
});

/**
 * @param {Object} store - The redux store.
 * @param {Object} globalUI - The global ui object.
 */
const verifyAppVersion = (store, globalUI) => {
    if (store.getState().appVersion !== config.appVersion) {
        globalUI.logout();
    }
};

const initializeApp = () => {
    if (global.core) {
        return global.core;
    }

    const environment = getEnvironment();
    const store = initializeReduxStore(environment);
    const globalUI = initializeGlobalUI(store, environment);
    const serviceMocker = initializeServiceMocker(store);

    addAjaxInterceptors();
    verifyAppVersion(store, globalUI);
    config.applyLanguage(store.getState().user.languageCode);

    global.core = {
        environment,
        globalUI,
        serviceMocker,
        store
    };

    return global.core;
};

export const {
    environment,
    globalUI,
    serviceMocker,
    store
} = initializeApp();
