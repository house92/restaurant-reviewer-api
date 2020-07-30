const postgres = require('../../postgres');
const generateDeleteRestaurantSqlQuery = require('../sqlQueries/generateDeleteRestaurantSqlQuery');

async function deleteRestaurant(req, res, next) {
  try {
    const { id } = req.params;

    const sqlQuery = generateDeleteRestaurantSqlQuery(id, req.session.user.ownerId, req.session.user.isAdmin);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    if (sqlResponse.rowCount === 0) {
      throw new Error('Users can only delete their own restaurants');
    }

    res.status(200).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = deleteRestaurant;