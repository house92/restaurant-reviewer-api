const postgres = require('../../postgres');
const generateSelectUserByIdSqlQuery = require('../sqlQueries/generateSelectUserByIdSqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');

async function getUserById(req, res, next) {
  try {
    const sqlQuery = generateSelectUserByIdSqlQuery(req.params.id);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const user = genericSingleRowSqlResponseTransform(sqlResponse);

    res.json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = getUserById;