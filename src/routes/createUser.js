const postgres = require('../../postgres');
const generateCreateUserSqlQuery = require('../sqlQueries/generateCreateUserSqlQuery');
const generateCreateOwnerSqlQuery = require('../sqlQueries/generateCreateOwnerSqlQuery');
const createUserSqlResponseTransform = require('../transforms/createUserSqlResponseTransform');
const GenericError = require('../errors/GenericError');

async function createUser(req, res, next) {
  try {
    const userData = req.body;
    let ownerSqlResponse;

    const sqlQuery = generateCreateUserSqlQuery(userData);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);
    
    if (userData.isOwner) {
      const ownerSqlQuery = generateCreateOwnerSqlQuery(sqlResponse.rows[0].id);

      ownerSqlResponse = await postgres.query(req.dependencies.pgPool, ownerSqlQuery);
    }

    const user = createUserSqlResponseTransform(sqlResponse, ownerSqlResponse);

    req.session.user = user;
    req.session.save(() => {
      res.json(user);
    });
  } catch (error) {
    if (error.message === 'duplicate key value violates unique constraint "users_email_key"') {
      return next(new GenericError('There is already an account with that e-mail address', { status: 400 }));
    }
    next(error);
  }
}

module.exports = createUser;