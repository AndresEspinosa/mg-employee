// @json
import appData from '../../../package.json';
import initialState from './initial-state.json';
import languages from '../master-data/languages.json';

// @scripts
import { getDefaultLanguage, getNavigatorLanguage } from '../../util';

/**
 * @return {Object}
 */
const getInitialState = () => {
    initialState.appVersion = appData.version;

    initialState.user.languageCode = getDefaultLanguage({
        navigatorLanguage: getNavigatorLanguage(),
        supportedLanguages: languages,
        valueOnError: initialState.user.languageCode
    });

    return initialState;
};

export default getInitialState();
