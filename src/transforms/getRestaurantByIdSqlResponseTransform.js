const postgres = require('../../postgres');

function getRestaurantByIdSqlResponseTransform(sqlResponse) {
  const transformed = postgres.translateFieldNamesToCamelcase(sqlResponse.rows[0].restaurant);

  if (transformed.reviews.length === 1 && transformed.reviews[0].rating === null) {
    // This was a dummy JSON generated by Postgres
    transformed.reviews = [];
  }

  transformed.averageRating = transformed.reviews.map(review => review.rating).reduce((a, b) => a + b, 0) / transformed.reviews.length;

  return transformed;
}

module.exports = getRestaurantByIdSqlResponseTransform;