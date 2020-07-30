const sql = require('sql-template-strings');

function generateDeleteReviewSqlQuery(id, userId, isAdmin = false) {
  const sqlQuery = sql`
    DELETE FROM reviews WHERE id = ${id}
  `;

  if (!isAdmin) {
    sqlQuery.append(sql` AND user_id = ${userId}`);
  }

  return sqlQuery;
}

module.exports = generateDeleteReviewSqlQuery;