const sql = require('sql-template-strings');

function generateSelectRestaurantByIdSqlQuery(id) {
  return sql`
    SELECT jsonb_build_object(
      'id', id,
      'owner_id', owner_id,
      'name', name,
      'address', address,
      'description', description,
      'image', image,
      'reviews', jsonb_agg(review)
    ) restaurant
    FROM (
      SELECT
        res.*,
        jsonb_build_object(
          'id', rev.id,
          'user_id', rev.user_id,
          'user_name', u.name,
          'rating', rev.rating,
          'visit_date', rev.visit_date,
          'comment', rev.comment,
          'seen', rev.seen,
          'reply', rr.body
        ) review
      FROM restaurants res
        LEFT JOIN reviews rev ON res.id = rev.restaurant_id
        LEFT JOIN review_replies rr ON rev.id = rr.review_id
        LEFT JOIN users u ON u.id = rev.user_id
      WHERE res.id = ${id}
      ORDER BY rev.visit_date DESC
    ) t
    GROUP BY id, owner_id, name, address, description, image;
  `;
}

module.exports = generateSelectRestaurantByIdSqlQuery;