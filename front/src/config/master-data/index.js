// @packages
import languages from './languages.json';

/**
 * @param {Object} text - The current object of texts.
 * @return {{
 *  description: string,
 *  id: string
 * }[]}
 */
export const getMasterData = (text) => {
    const masterData = {
        languages
    };

    Object.keys(masterData).forEach((key) => {
        masterData[key] = masterData[key].map(masterItem =>
            Object.assign({}, masterItem, {
                description:
                    (
                        Boolean(text.masterData[key]) &&
                        text.masterData[key][masterItem.id]
                    )
                    || masterItem.description
            }));
    });

    return masterData;
};
