var isNumber = require("is_number");


module.exports = Number.isNaN || function isNaN(value) {
    return isNumber(value) && value !== value;
};
