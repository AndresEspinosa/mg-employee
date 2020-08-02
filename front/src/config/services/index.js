// @json
import services from './services.json';

// @constants
const BASE_URL_PLACEHOLDER_FOR_SERVICES = '{root}';

/**
 * @param {string} rootUrl - The base service url for the current environment.
 * @return {Object}
 */
export const getServices = rootUrl =>
    JSON.parse(
        JSON.stringify(services)
            .replace(
                new RegExp(BASE_URL_PLACEHOLDER_FOR_SERVICES, 'g'),
                rootUrl
            )
    );
