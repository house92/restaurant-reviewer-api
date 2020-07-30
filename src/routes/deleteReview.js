const postgres = require('../../postgres');
const generateDeleteReviewSqlQuery = require('../sqlQueries/generateDeleteReviewSqlQuery');

async function deleteReview(req, res, next) {
  try {
    const { id } = req.params;

    const sqlQuery = generateDeleteReviewSqlQuery(id, req.session.user.id, req.session.user.isAdmin);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    if (sqlResponse.rowCount === 0) {
      throw new Error('Users can only delete their own reviews');
    }

    res.status(200).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = deleteReview;