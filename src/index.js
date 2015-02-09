var isNumber = require("is_number");


module.exports = Number.isNaN || function isNaN(obj) {
    return isNumber(obj) && obj !== obj;
};
