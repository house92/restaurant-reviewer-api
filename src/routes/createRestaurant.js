const postgres = require('../../postgres');
const generateCreateRestaurantSqlQuery = require('../sqlQueries/generateCreateRestaurantSqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');

async function createRestaurant(req, res, next) {
  try {
    const restaurantData = req.body;

    const sqlQuery = generateCreateRestaurantSqlQuery(restaurantData);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const restaurant = genericSingleRowSqlResponseTransform(sqlResponse);

    res.json(restaurant);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = createRestaurant;