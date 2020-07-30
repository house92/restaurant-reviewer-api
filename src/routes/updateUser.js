const postgres = require('../../postgres');
const generateUpdateUserSqlQuery = require('../sqlQueries/generateUpdateUserSqlQuery');
const generateSelectUserByIdSqlQuery = require('../sqlQueries/generateSelectUserByIdSqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');

async function updateUser(req, res, next) {
  try {
    const userData = req.body;
    const { id } = req.params;

    userData.id = id;

    if (id !== req.session.user.id && !req.session.user.isAdmin) {
      throw new Error('Users can only update their own data');
    }

    const sqlQuery = generateUpdateUserSqlQuery(userData);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const selectUserByIdSqlQuery = generateSelectUserByIdSqlQuery(sqlResponse.rows[0].id);

    const selectUserByIdSqlResponse = await postgres.query(req.dependencies.pgPool, selectUserByIdSqlQuery);

    const user = genericSingleRowSqlResponseTransform(selectUserByIdSqlResponse);

    res.json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = updateUser;