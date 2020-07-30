CREATE EXTENSION pgcrypto;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  is_owner BOOLEAN DEFAULT FALSE
);

CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR NOT NULL,
  description TEXT,
  image VARCHAR
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL,
  visit_date TIMESTAMP WITH TIME ZONE NOT NULL,
  comment TEXT,
  UNIQUE (user_id, restaurant_id),
  CHECK (rating >= 1),
  CHECK (rating <= 5)
);
