const sql = require('sql-template-strings');

function generateSelectUserSqlQuery(userData) {
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
    WHERE email = ${userData.email} AND password = crypt(${userData.password}, password);
  `;
}

module.exports = generateSelectUserSqlQuery;