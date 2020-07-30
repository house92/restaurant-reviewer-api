const sql = require('sql-template-strings');

function generateDeleteUserSessionSqlQuery(id) {
  const sqlQuery = sql`
    DELETE FROM session WHERE (sess->'user'->>'id')::integer = ${id};
  `;

  return sqlQuery;
}

module.exports = generateDeleteUserSessionSqlQuery;