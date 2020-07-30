const sql = require('sql-template-strings');

function generateDeleteUserSqlQuery(id) {
  const sqlQuery = sql`
    DELETE FROM users WHERE id = ${id}
  `;

  return sqlQuery;
}

module.exports = generateDeleteUserSqlQuery;