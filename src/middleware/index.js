const authenticateUser = require('./authenticateUser');
const authenticateOwnerOrAdmin = require('./authenticateOwnerOrAdmin');
const coerceIdParamToNumber = require('./coerceIdParamToNumber');

module.exports = {
  authenticateUser,
  authenticateOwnerOrAdmin,
  coerceIdParamToNumber,
};
