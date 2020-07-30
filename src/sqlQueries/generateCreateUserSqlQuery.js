const sql = require('sql-template-strings');

function generateCreateUserSqlQuery(userData) {
  return sql`
    INSERT INTO users (
      name,
      email,
      password,
      is_owner
    ) VALUES (
      ${userData.name},
      ${userData.email},
      crypt(${userData.password}, gen_salt('bf')),
      ${userData.isOwner}
    ) RETURNING id, name, email, is_owner;
  `;
}

module.exports = generateCreateUserSqlQuery;