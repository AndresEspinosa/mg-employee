// @json
import mainMenu from './main-menu.json';

// @scripts
import { getRoute } from '../routes';

/**
 * @param {Object} text - The current object of texts.
 * @param {{
 *  description: string,
 *  icon: string,
 *  isDefault: boolean,
 *  name: string,
 *  permission: string,
 *  url: string
 * }[]} items
 */
export const getMainMenu = (text, items = mainMenu) =>
    items.map((item) => {
        if (Array.isArray(item.submenuItems)) {
            item.submenuItems = getMainMenu(text, item.submenuItems);
        }

        const route = getRoute(item.name);

        return Object.assign({}, item, {
            description: text.routes[item.name],
            permission: route && route.permission,
            url: route && route.url
        });
    });
