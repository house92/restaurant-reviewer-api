const postgres = require('../../postgres');
const generateCreateReviewSqlQuery = require('../sqlQueries/generateCreateReviewSqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');

async function createReview(req, res, next) {
  try {
    const sqlQuery = generateCreateReviewSqlQuery(req.body);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const review = genericSingleRowSqlResponseTransform(sqlResponse);

    res.json(review);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = createReview;