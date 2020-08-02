// @json
import routes from './routes.json';

/**
 * @param {string} name - The route's name.
 * @return {{
 *  component: string,
 *  name: string,
 *  permission: string,
 *  requiresLogout: boolean,
 *  url: string
 * }}
 */
export const getRoute = name =>
    routes.find(route => route.name === name);

export default routes;
