const isExisty = function isExisty(value) {
    return value !== null && value !== undefined;
};

const _isEmpty = function _isEmpty(value) {
    return value === '' || value === undefined || value == null || (Array.isArray(value) && !value.length);
};

const isEmptyTrimed = function isEmptyTrimed(value) {
    if (typeof value === 'string') {
        return value.trim() === '';
    }
    return true;
};

const isValidIranianNationalCode = (value) => {

    if (!/^\d{10}$/.test(value))
        return false;

    let check = parseInt(value[9]);
    let sum = 0;
    let i;
    for (i = 0; i < 9; ++i) {
        sum += parseInt(value[i]) * (10 - i);
    }
    sum %= 11;
    
    // eslint-disable-next-line
    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
}

export const validations = {
    matchRegexp: function matchRegexp(value, regexp) {
        const validationRegexp = regexp instanceof RegExp ? regexp : new RegExp(regexp);
        return !isExisty(value) || _isEmpty(value) || validationRegexp.test(value);
    },

    // eslint-disable-next-line
    isEmail: function isEmail(value) {
        // eslint-disable-next-line
        return !_isEmpty(value) && validations.matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
    },

    isPhone: function isPhone(value) {
        return !_isEmpty(value) && validations.matchRegexp(value, /^0([ ]|-|[()]){0,2}9[0|1|2|3|4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/i);
    },

    isTelephone: function isPhone(value) {
        return !_isEmpty(value) && validations.matchRegexp(value, /^((0)([1-9])[0-9]{9})$/i);
    },

    isURL: function isPhone(value) {
        // eslint-disable-next-line
        return !_isEmpty(value) && validations.matchRegexp(value, /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i);
    },

    isValidIranianNationalCode: (value) => {
        return isValidIranianNationalCode(value)
    },

    isEmpty: function isEmpty(value) {
        return _isEmpty(value);
    },

    required: function required(value) {
        return !_isEmpty(value);
    },

    trim: function trim(value) {
        return !isEmptyTrimed(value);
    },

    isNumber: function isNumber(value) {
        return validations.matchRegexp(value, /^-?[0-9]\d*(\d+)?$/i);
    },

    isFloat: function isFloat(value) {
        return validations.matchRegexp(value, /^(?:[1-9]\d*|0)?(?:\.\d+)?$/i);
    },

    isPositive: function isPositive(value) {
        if (isExisty(value)) {
            return (validations.isNumber(value) || validations.isFloat(value)) && value >= 0;
        }
        return true;
    },

    maxNumber: function maxNumber(value, max) {
        return !isExisty(value) || _isEmpty(value) || parseInt(value, 10) <= parseInt(max, 10);
    },

    minNumber: function minNumber(value, min) {
        return !isExisty(value) || _isEmpty(value) || parseInt(value, 10) >= parseInt(min, 10);
    },

    isString: function isString(value) {
        return !_isEmpty(value) || typeof value === 'string' || value instanceof String;
    },
    minStringLength: function minStringLength(value, length) {
        return validations.isString(value) && value.length >= length;
    },
    maxStringLength: function maxStringLength(value, length) {
        return validations.isString(value) && value.length <= length;
    }
};

