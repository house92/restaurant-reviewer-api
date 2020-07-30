const sql = require('sql-template-strings');

function generateUpdateRestaurantSqlQuery(restaurantData, ownerId, isAdmin = false) {
  const sqlQuery = sql`
    UPDATE restaurants
    SET (
      owner_id,
      name,
      address,
      description,
      image
    ) = (
      ${restaurantData.ownerId},
      ${restaurantData.name},
      ${restaurantData.address},
      ${restaurantData.description},
      ${restaurantData.image}
    )
    WHERE id = ${restaurantData.id}`;

  if (!isAdmin) {
    sqlQuery.append(sql` AND owner_id = ${ownerId} `);
  }
    
  sqlQuery.append(`RETURNING owner_id, name, address, description, image;`);

  return sqlQuery;
}

module.exports = generateUpdateRestaurantSqlQuery;