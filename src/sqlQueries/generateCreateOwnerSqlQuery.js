const sql = require('sql-template-strings');

function generateCreateUserSqlQuery(userId) {
  return sql`
    INSERT INTO owners (
      user_id
    ) VALUES (
      ${userId}
    ) RETURNING id, user_id;
  `;
}

module.exports = generateCreateUserSqlQuery;