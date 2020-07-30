const genericSingleRowSqlResponseTransform = require('./genericSingleRowSqlResponseTransform');

function createUserSqlResponseTransform(sqlResponse, ownerSqlResponse) {
  const transformed = genericSingleRowSqlResponseTransform(sqlResponse);

  if (ownerSqlResponse) {
    transformed.ownerId = ownerSqlResponse.rows[0].id;
  }

  return transformed;
}

module.exports = createUserSqlResponseTransform;
