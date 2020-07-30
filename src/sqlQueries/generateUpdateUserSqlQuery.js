const sql = require('sql-template-strings');

function generateUpdateUserSqlQuery(userData) {
  const sqlQuery = sql`
    UPDATE users
    SET (
      name,
      email`;

  if (userData.password) {
    sqlQuery.append(sql`,
      password`);
  }
  
  sqlQuery.append(sql`) = (
      ${userData.name},
      ${userData.email}`);

  if (userData.password) {
    sqlQuery.append(sql`,
      crypt(${userData.password}, gen_salt('bf'))`);
  }
  sqlQuery.append(sql`)
    WHERE id = ${userData.id}
    RETURNING id, name, email, is_owner, is_admin;`);

  return sqlQuery;
}

module.exports = generateUpdateUserSqlQuery;