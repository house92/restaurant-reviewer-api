const postgres = require('../../postgres');
const generateSelectRestaurantsSqlQuery = require('../sqlQueries/generateSelectRestaurantsSqlQuery');
const genericMultiRowSqlResponseTransform = require('../transforms/genericMultiRowSqlResponseTransform');

async function getRestaurants(req, res, next) {
  try {
    const { filters, ownerId } = req.query;
    const sqlQuery = generateSelectRestaurantsSqlQuery(filters, ownerId);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    res.json(genericMultiRowSqlResponseTransform(sqlResponse));
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = getRestaurants;