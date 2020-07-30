const sql = require('sql-template-strings');

function generateUpdateReviewsAsSeenSqlQuery(reviewIds) {
  return sql`
    UPDATE reviews
    SET seen = true
    WHERE id IN (`.append(reviewIds.join(', ')).append(sql`)
    RETURNING id, user_id, restaurant_id, rating, visit_date, comment, seen;
  `);
}

module.exports = generateUpdateReviewsAsSeenSqlQuery;