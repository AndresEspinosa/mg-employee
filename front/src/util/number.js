// @packages
import numeral from 'numeral';

/**
 * Rounds a number with the passed-in decimals.
 * @param {number} number - The number to be rounded.
 * @param {number} decimals - The number of decimals.
 * @returns {number}
 */
export const round = (number, decimals) =>
    Math.round(number * (10 ** decimals)) / (10 ** decimals);

/**
 * Gets a money representation of the passed-in number.
 * @param {string} currencyChar - The currency symbol. E.g.: "$".
 * @param {number} decimals - The number of decimals.
 * @param {string} decimalsChar - The char separator for decimals.
 * @param {number} number - The number to be formated.
 * @param {string} thousandsChar - The char separator for thousands.
 * @returns {string}
 */
export const toMoney = ({
    currencyChar = '$',
    decimals,
    decimalsChar = '.',
    number,
    thousandsChar = ','
}) =>
    numeral(number).format(
        `${currencyChar} 0${thousandsChar}0${decimalsChar}[${'0'.repeat(decimals)}]`
    );
