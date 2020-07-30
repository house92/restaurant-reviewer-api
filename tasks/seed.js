require('dotenv').config();
const sql = require('sql-template-strings')

const postgres = require('../postgres');
const users = require('../data/users');
const restaurants = require('../data/restaurants');
const reviews = require('../data/reviews');

// POSTGRES SETUP
// 

const pgConfig = {
  defaultEnv: 'local',
  local: {
    driver: 'pg',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    ssl: process.env.POSTGRES_SSL === 'true',
  },
};

const pgPool = postgres.pool(pgConfig);

// USERS
// 

const insertUsersQuery = sql`
  INSERT INTO users (
    name,
    email,
    password,
    is_owner
  ) VALUES `;

for (let i = 0; i < users.length; i++) {
  insertUsersQuery.append(sql`
    (
      ${users[i].name},
      ${users[i].email},
      crypt(${users[i].password}, gen_salt('bf')),
      ${users[i].isOwner}
    )
  `);
  if (i !== users.length - 1) {
    insertUsersQuery.append(', ')
  }
}

insertUsersQuery.append(' RETURNING *;')

// OWNERS
// 

const insertOwnersQuery = sql`
  INSERT INTO owners (user_id)
  SELECT id
  FROM users
  WHERE is_owner
  RETURNING id;
`;

// RESTAURANTS
// 

function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length - 0.01))];
}

function createInsertRestaurantsQuery(ownerIds) {
  const insertRestaurantsQuery = sql`
    INSERT INTO restaurants (
      owner_id,
      name,
      address,
      description,
      image
    ) VALUES `;

  for (let i = 0; i < restaurants.length; i++) {
    const ownerId = getRandom(ownerIds);
    insertRestaurantsQuery.append(sql`
      (
        ${ownerId},
        ${restaurants[i].name},
        ${restaurants[i].address},
        ${restaurants[i].description},
        ${restaurants[i].image}
      )
    `);
    if (i !== restaurants.length - 1) {
      insertRestaurantsQuery.append(', ')
    }
  }

  insertRestaurantsQuery.append(' RETURNING *;');

  return insertRestaurantsQuery;
}

// REVIEWS
// 

function createInsertReviewsQuery(users, restaurants) {
  const augmentedReviews = reviews.map(review => {
    const userId = users.find(user => user.email === review.user.email).id;
    const restaurantId = restaurants.find(restaurant => restaurant.name === review.restaurant.name).id;

    return {
      ...review,
      userId,
      restaurantId,
    };
  });

  const insertReviewsQuery = sql`
  INSERT INTO reviews (
    user_id,
    restaurant_id,
    rating,
    comment,
    visit_date
  ) VALUES `;

  for (let i = 0; i < augmentedReviews.length; i++) {
    insertReviewsQuery.append(sql`
    (
      ${augmentedReviews[i].userId},
      ${augmentedReviews[i].restaurantId},
      ${augmentedReviews[i].rating},
      ${augmentedReviews[i].comment},
      ${augmentedReviews[i].visitDate}
    )
  `);
    if (i !== augmentedReviews.length - 1) {
      insertReviewsQuery.append(', ')
    }
  }

  return insertReviewsQuery;
}

// SEED
// 

async function run() {
  try {
    const [usersRes, ownersRes] = await postgres.transact(pgPool, [insertUsersQuery, insertOwnersQuery]);
    const insertRestaurantsQuery = createInsertRestaurantsQuery(ownersRes.rows.map(row => row.id))
    const restaurantsRes = await postgres.query(pgPool, insertRestaurantsQuery);
    const insertReviewsQuery = createInsertReviewsQuery(usersRes.rows, restaurantsRes.rows);
    await postgres.query(pgPool, insertReviewsQuery);
    process.exit(0);
  } catch (error) {
    console.error(error);
    await postgres.transact(pgPool, [
      'DELETE FROM users;',
      'DELETE FROM restaurants;',
    ]);
    process.exit(1);
  }
}

run();
