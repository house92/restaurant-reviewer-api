const postgres = require('../../postgres');

function genericSingleRowSqlResponseTransform(sqlResponse) {
  const transformed = postgres.translateFieldNamesToCamelcase(sqlResponse.rows[0]);

  return transformed;
}

module.exports = genericSingleRowSqlResponseTransform;