const sql = require('sql-template-strings');

function generateSelectRestaurantsSqlQuery(filters = {}, ownerId) {
  const sqlQuery = sql`
    SELECT * FROM (
      SELECT
        res.id,
        res.owner_id,
        res.name,
        res.image,
        COALESCE(ROUND(AVG(rev.rating), 2), 0) AS average_rating,
        BOOL_OR(NOT rev.seen) AS has_unseen_reviews
      FROM restaurants res
        LEFT OUTER JOIN reviews rev on res.id = rev.restaurant_id
        `;

  if (ownerId) {
    sqlQuery.append(sql`WHERE owner_id = ${ownerId}`);
  }

  sqlQuery.append(sql`
      GROUP BY res.id
    ) t
    WHERE average_rating >= ${filters.rating}
    ORDER BY average_rating DESC, id;
  `);

  return sqlQuery;
}

module.exports = generateSelectRestaurantsSqlQuery;