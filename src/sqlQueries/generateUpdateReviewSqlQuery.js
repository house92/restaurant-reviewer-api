const sql = require('sql-template-strings');

function generateUpdateReviewSqlQuery(reviewData, userId, isAdmin = false) {
  const sqlQuery = sql`
    UPDATE reviews
    SET (
      rating,
      visit_date,
      comment,
      seen
    ) = (
      ${reviewData.rating},
      ${reviewData.visitDate},
      ${reviewData.comment},
      ${reviewData.seen}
    )
    WHERE id = ${reviewData.id}
  `;

  if (!isAdmin) {
    sqlQuery.append(sql` AND user_id = ${userId} `);
  }

  sqlQuery.append(`RETURNING id, user_id, restaurant_id, rating, visit_date, comment, seen;`);

  return sqlQuery;
}

module.exports = generateUpdateReviewSqlQuery;