const sql = require('sql-template-strings');

function generateDeleteRestaurantSqlQuery(id, ownerId, isAdmin = false) {
  const sqlQuery = sql`
    DELETE FROM restaurants WHERE id = ${id}
  `;

  if (!isAdmin) {
    sqlQuery.append(sql` AND owner_id = ${ownerId}`);
  }

  return sqlQuery;
}

module.exports = generateDeleteRestaurantSqlQuery;