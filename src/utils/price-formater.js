/**
 * This function get a number and separate triple with separator char
 *
 * @param {number} price
 * @param {string} separator
 * @return {string}
 */
export default function priceFormatter(price, separator = ',') {
    if (price == null)
        return ''

    let tmp_price = [],
        tmp_c = 1;
    price = price.toString(); // convert int or any other types to string

    // this loop will return a reversed array of chars
    for (let i = price.length - 1; i >= 0; i--) {
        tmp_price.push(price[i]);
        if (tmp_c === 3 && i > 0) {
            tmp_price.push(separator);
            tmp_c = 0;
        }
        tmp_c++;

    }

    // re reverse and join the chars array of formatting
    return tmp_price.reverse().join('');
}