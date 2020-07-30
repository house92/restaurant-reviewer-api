const express = require('express');
const cors = require('cors');
const session = require('express-session');

const getRestaurants = require('./routes/getRestaurants');
const getRestaurantById = require('./routes/getRestaurantById');
const getUserById = require('./routes/getUserById');

const createUser = require('./routes/createUser');
const createRestaurant = require('./routes/createRestaurant');
const createReview = require('./routes/createReview');
const createReviewReply = require('./routes/createReviewReply');

const updateRestaurant = require('./routes/updateRestaurant');
const updateReview = require('./routes/updateReview');
const updateUser = require('./routes/updateUser');

const deleteRestaurant = require('./routes/deleteRestaurant');
const deleteReview = require('./routes/deleteReview');
const deleteUser = require('./routes/deleteUser');

const signIn = require('./routes/signIn');
const signOut = require('./routes/signOut');

const middleware = require('./middleware');

const { ROUTES } = require('./constants');

function create(pgPool, createSessionStore = () => null) {
  const app = express();
  const sessionConfig = {
    secret: process.env.COOKIE_SECRET,
    store: createSessionStore(session),
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: true,
      httpOnly: true,
    },
  };

  if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sessionConfig.cookie.secure = true; // serve secure cookies
  }

  app.use(session(sessionConfig));
  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json());

  app.use((req, _, next) => {
    req.dependencies = { pgPool };
    next();
  });

  app.get(ROUTES.restaurants, getRestaurants);
  app.get(ROUTES.restaurant, middleware.coerceIdParamToNumber, getRestaurantById);
  app.get(ROUTES.user, middleware.coerceIdParamToNumber, getUserById);

  app.post(ROUTES.users, createUser);
  app.post(ROUTES.restaurants, middleware.authenticateOwnerOrAdmin, createRestaurant);
  app.post(ROUTES.reviews, middleware.authenticateUser, createReview);
  app.post(ROUTES.reviewReplies, middleware.authenticateOwnerOrAdmin, createReviewReply);
  app.post(ROUTES.authenticate, signIn);
  app.post(ROUTES.signOut, signOut);

  app.patch(ROUTES.restaurant, middleware.coerceIdParamToNumber, middleware.authenticateOwnerOrAdmin, updateRestaurant);
  app.patch(ROUTES.review, middleware.coerceIdParamToNumber, middleware.authenticateUser, updateReview);
  app.patch(ROUTES.user, middleware.coerceIdParamToNumber, middleware.authenticateUser, updateUser);

  app.delete(ROUTES.restaurant, middleware.coerceIdParamToNumber, middleware.authenticateOwnerOrAdmin, deleteRestaurant);
  app.delete(ROUTES.review, middleware.coerceIdParamToNumber, middleware.authenticateUser, deleteReview);
  app.delete(ROUTES.user, middleware.coerceIdParamToNumber, middleware.authenticateUser, deleteUser);

  app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
  });

  return app;
}

module.exports = { create };