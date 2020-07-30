const postgres = require('../../postgres');
const generateSelectRestaurantByIdSqlQuery = require('../sqlQueries/generateSelectRestaurantByIdSqlQuery');
const generateUpdateReviewsAsSeenSqlQuery = require('../sqlQueries/generateUpdateReviewsAsSeenSqlQuery');
const getRestaurantByIdSqlResponseTransform = require('../transforms/getRestaurantByIdSqlResponseTransform');
const genericMultiRowSqlResponseTransform = require('../transforms/genericMultiRowSqlResponseTransform');

async function getRestaurantById(req, res, next) {
  try {
    const sqlQuery = generateSelectRestaurantByIdSqlQuery(req.params.id);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const restaurant = getRestaurantByIdSqlResponseTransform(sqlResponse);

    if (
      req.session.user &&
      restaurant.ownerId === req.session.user.ownerId &&
      restaurant.reviews.some(review => !review.seen)
    ) {
      const updateReviewsSqlQuery = generateUpdateReviewsAsSeenSqlQuery(restaurant.reviews.map(review => review.id));

      await postgres.query(req.dependencies.pgPool, updateReviewsSqlQuery);
    }

    res.json(restaurant);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = getRestaurantById;