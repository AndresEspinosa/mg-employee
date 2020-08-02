// @packages
import _ from 'lodash';

// @scripts
import { removeAccents } from './string';

/**
 * Sorts an array by a property.
 *  - The sort is case insensitive
 *  - The sort is accent insensitive.
 * @param {?string} sortDirection - 'asc' or 'desc'.
 * @param {string} sortKey - Property name to sort the array.
 * @param {Object[]} source - The array to be sorted.
 * @returns {Object[]}
 */
export const sortArray = ({
    sortDirection = 'asc',
    sortKey,
    source
}) => {
    if (!source || source.length <= 1) {
        return source;
    }

    const sortedArray = [...source];

    sortedArray.sort((i1, i2) => {
        const item1Val = i1 && typeof i1 === 'object'
            ? String(i1[sortKey])
            : '';
        const unaccentItem1Val = removeAccents(item1Val);
        const lowerCaseItem1Val = unaccentItem1Val.toLowerCase();

        const item2Val = i2 && typeof i2 === 'object'
            ? String(i2[sortKey])
            : '';
        const unaccentItem2Val = removeAccents(item2Val);
        const lowerCaseItem2Val = unaccentItem2Val.toLowerCase();

        if (lowerCaseItem1Val > lowerCaseItem2Val) {
            return sortDirection === 'asc' ? 1 : -1;
        } else if (lowerCaseItem1Val < lowerCaseItem2Val) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        return 0;
    });

    return sortedArray;
};

/**
 * Filters an array by a property that contains a given text.
 *  - The filter is case insensitive
 *  - The filter is accent insensitive.
 * @param {string} filterKey - The property to be evaluated.
 * @param {?string} filterValue - The text to be searched.
 * @param {Object[]} source - The array to be filtered.
 * @returns {Object[]}
 */
export const filterArray = ({
    filterKey,
    filterValue,
    source
}) => {
    if (!source || !source.length) {
        return source;
    }

    const filteredArray = source.filter((item) => {
        const itemVal = item && typeof item === 'object'
            ? String(item[filterKey])
            : '';
        const unaccentItemVal = removeAccents(itemVal);
        const lowerCaseItemVal = unaccentItemVal.toLowerCase();

        const filterVal = filterValue || '';
        const unaccentFilterVal = removeAccents(filterVal);
        const lowerCaseFilterVal = unaccentFilterVal.toLowerCase();

        return lowerCaseItemVal.indexOf(lowerCaseFilterVal) >= 0;
    });

    return filteredArray;
};

/**
 * Applies pagination over an array of objects.
 *  - The sort is case insensitive
 *  - The sort is accent insensitive.
 * @param {?number} pageNumber - The page number to be returned.
 * @param {number} pageSize - The size of each page.
 * @param {?string} sortDirection - 'asc' or 'desc'.
 * @param {?string} sortKey - Property name to sort the array.
 * @param {Object[]} source - The array to paginate.
 * @returns {Object[]}
 */
export const paginateArray = ({
    pageNumber = 1,
    pageSize,
    sortDirection = 'asc',
    sortKey = null,
    source
}) => {
    if (!source || !source.length) {
        return source;
    }

    const paginatedArray = _.take(
        _.drop(
            sortKey
                ? sortArray({
                    source, sortKey, sortDirection
                })
                : source,
            (pageNumber - 1) * pageSize
        ),
        pageSize
    );

    return paginatedArray;
};

/**
 * Groups an array by a property.
 * @param {string} groupKey - The property to group by.
 * @param {Object[]} source - The array to be grouped.
 * @returns {{groupKey: string, items: Object[]}[]}
 */
export const groupArray = ({
    groupKey,
    source
}) => {
    if (!source || !source.length) {
        return source;
    }

    const groupedArray = source.reduce((prevElement, nextElement) => {
        if (nextElement) {
            const item = prevElement.find(
                item => item.groupKey === nextElement[groupKey]
            );

            if (item) {
                item.items.push(nextElement);
            } else {
                prevElement.push({
                    groupKey: nextElement[groupKey],
                    items: [nextElement]
                });
            }
        }
        return prevElement;
    }, []);

    return groupedArray;
};

/**
 * Gets the minimun value of a property in a given array.
 * @param {Object} defaultValue - Value to return by default if the
 *  given array is undefined, null or empty.
 * @param {string} minKey - The property to get the min value.
 * @param {Object[]} source - The array to get the min value.
 * @returns {Object}
 */
export const getMinFromArray = ({
    defaultValue = 0,
    minKey,
    source
}) => {
    const filteredArray = source && source.length
        ? source.filter(item => item && _.has(item, minKey))
        : [];
    if (!filteredArray.length) {
        return defaultValue;
    }
    return filteredArray.reduce((min, nextElement) =>
        nextElement && nextElement[minKey] < min
            ? nextElement[minKey]
            : min
    , filteredArray[0][minKey]);
};

/**
 * Gets the maximun value of a property in a given array.
 * @param {Object} defaultValue - Value to return by default if the
 *  given array is undefined, null or empty.
 * @param {string} maxKey - The property to get the max value.
 * @param {Object[]} source - The array to get the max value.
 * @returns {Object}
 */
export const getMaxFromArray = ({
    defaultValue = 0,
    maxKey,
    source
}) => {
    const filteredArray = source && source.length
        ? source.filter(item => item && _.has(item, maxKey))
        : [];
    if (!filteredArray.length) {
        return defaultValue;
    }
    return filteredArray.reduce((min, nextElement) =>
        nextElement && nextElement[maxKey] > min
            ? nextElement[maxKey]
            : min
    , filteredArray[0][maxKey]);
};
