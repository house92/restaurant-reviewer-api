const sql = require('sql-template-strings');

function generateSelectUserByIdSqlQuery(id) {
  return sql`
    SELECT
      u.id,
      o.id AS owner_id,
      u.name,
      u.email,
      u.is_owner,
      u.is_admin
    FROM users u
      LEFT JOIN owners o ON u.id = o.user_id
    WHERE u.id = ${id};
  `;
}

module.exports = generateSelectUserByIdSqlQuery;