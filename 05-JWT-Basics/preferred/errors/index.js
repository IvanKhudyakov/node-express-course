const CustomAPIError = require('../errors/custom-error');
const BadRequestError = require('../errors/bad-request');
const UnauthenicatedError = require('../errors/unauthenticated');

module.exports = {
    CustomAPIError,
    BadRequestError, 
    UnauthenicatedError,
};