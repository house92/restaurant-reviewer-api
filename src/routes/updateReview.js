const postgres = require('../../postgres');
const generateUpdateReviewSqlQuery = require('../sqlQueries/generateUpdateReviewSqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');

async function updateReview(req, res, next) {
  try {
    const { id } = req.params;
    const reviewData = req.body;

    reviewData.id = id;

    if (reviewData.userId !== req.session.user.id && !req.session.user.isAdmin) {
      throw new Error('Users can only update their own reviews');
    }

    const sqlQuery = generateUpdateReviewSqlQuery(reviewData, req.session.user.id, req.session.user.isAdmin);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const review = genericSingleRowSqlResponseTransform(sqlResponse);

    res.json(review);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = updateReview;