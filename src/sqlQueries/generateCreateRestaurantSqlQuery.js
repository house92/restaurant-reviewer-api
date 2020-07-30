const sql = require('sql-template-strings');

function generateCreateRestaurantSqlQuery(restaurantData) {
  return sql`
    INSERT INTO restaurants (
      owner_id,
      name,
      address,
      description,
      image
    ) VALUES (
      ${restaurantData.ownerId},
      ${restaurantData.name},
      ${restaurantData.address},
      ${restaurantData.description},
      ${restaurantData.image}
    ) RETURNING owner_id, name, address, description, image;
  `;
}

module.exports = generateCreateRestaurantSqlQuery;