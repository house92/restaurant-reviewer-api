const postgres = require('../../postgres');

function genericMultiRowSqlResponseTransform(sqlResponse) {
  const transformedRows = sqlResponse.rows.map(postgres.translateFieldNamesToCamelcase);

  return transformedRows;
}

module.exports = genericMultiRowSqlResponseTransform;