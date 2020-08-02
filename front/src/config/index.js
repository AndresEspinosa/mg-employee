/**
 * Join all configuration files in a unique config object which
 * can be used across the app.
 */

// @json
import appData from '../../package.json';

// @scripts
import initialState from './initial-state';
import mockData from './mock-data';
import routes from './routes';
import settings from './settings';
import text from './text';
import { getMainMenu } from './main-menu';
import { getMasterData } from './master-data';
import { getServices } from './services';

/**
 * @param {string} languageCode - E.g: 'en'
 */
function applyLanguage(languageCode) {
    const config = this;

    if (config.languageCode === languageCode) {
        return;
    }

    config.languageCode = languageCode;
    config.text = text[languageCode];
    config.masterData = getMasterData(config.text);
    config.mainMenu = getMainMenu(config.text);
}

/**
 * @return {{
 *  appVersion: string,
 *  applyLanguage: function,
 *  initialState: Object,
 *  languageCode: string,
 *  mainMenu: Array,
 *  masterData: Object,
 *  mockData: Object,
 *  routes: Array,
 *  services: Object,
 *  settings: Object,
 *  text: Object
 * }}
 */
const getConfiguration = () => {
    if (global.config) {
        return global.config;
    }

    const appVersion = appData.version;
    const services = getServices(settings.services.root);
    const config = {
        appVersion,
        applyLanguage,
        initialState,
        mockData,
        routes,
        services,
        settings
    };

    config.applyLanguage(initialState.user.languageCode);
    global.config = config;
    return config;
};

export const config = getConfiguration();
