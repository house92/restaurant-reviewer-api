const sql = require('sql-template-strings');

function generateCreateReviewSqlQuery(reviewData) {
  return sql`
    INSERT INTO reviews (
      restaurant_id,
      user_id,
      rating,
      comment,
      visit_date
    ) VALUES (
      ${reviewData.restaurantId},
      ${reviewData.userId},
      ${reviewData.rating},
      ${reviewData.comment},
      ${reviewData.visitDate}
    ) RETURNING restaurant_id, user_id, rating, comment, visit_date;
  `;
}

module.exports = generateCreateReviewSqlQuery;