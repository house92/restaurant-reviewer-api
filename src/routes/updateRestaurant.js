const postgres = require('../../postgres');
const generateUpdateRestaurantSqlQuery = require('../sqlQueries/generateUpdateRestaurantSqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');

async function updateRestaurant(req, res, next) {
  try {
    const { id } = req.params;
    const restaurantData = req.body;

    restaurantData.id = id;

    if (restaurantData.ownerId !== req.session.user.ownerId && !req.session.user.isAdmin) {
      throw new Error('Users can only update their own restaurants');
    }

    const sqlQuery = generateUpdateRestaurantSqlQuery(restaurantData, req.session.user.ownerId, req.session.user.isAdmin);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const restaurant = genericSingleRowSqlResponseTransform(sqlResponse);

    res.json(restaurant);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = updateRestaurant;