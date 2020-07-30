const postgres = require('../../postgres');
const generateCreateReviewReplySqlQuery = require('../sqlQueries/generateCreateReviewReplySqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');

async function createReviewReply(req, res, next) {
  try {
    const sqlQuery = generateCreateReviewReplySqlQuery(req.body);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    const reviewReply = genericSingleRowSqlResponseTransform(sqlResponse);

    res.json(reviewReply);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = createReviewReply;