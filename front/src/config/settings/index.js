// @packages
import merge from 'deepmerge';

// @json
import envDevelopment from './env-development.json';
import envLocal from './env-local.json';
import envProduction from './env-production.json';
import envQA from './env-qa.json';
import envStaging from './env-staging.json';
import envUnitTest from './env-unit-test.json';
import globals from './globals.json';

// @scripts
import { constants } from '../../core/constants';

/**
 * @return {Object}
 */
const getSettings = () => {
    switch (process.env.REACT_APP_ENV) {
        case constants.environment.DEVELOPMENT:
            return merge(globals, envDevelopment);
        case constants.environment.LOCAL:
            return merge(globals, envLocal);
        case constants.environment.PRODUCTION:
            return merge(globals, envProduction);
        case constants.environment.QA:
            return merge(globals, envQA);
        case constants.environment.STAGING:
            return merge(globals, envStaging);
        case constants.environment.UNIT_TEST:
            return merge(globals, envUnitTest);
        default:
            return globals;
    }
};

export default getSettings();
