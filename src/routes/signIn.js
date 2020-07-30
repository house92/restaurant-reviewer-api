const postgres = require('../../postgres');
const generateSelectUserSqlQuery = require('../sqlQueries/generateSelectUserSqlQuery');
const genericSingleRowSqlResponseTransform = require('../transforms/genericSingleRowSqlResponseTransform');
const GenericError = require('../errors/GenericError');

async function signIn(req, res, next) {
  try {
    const sqlQuery = generateSelectUserSqlQuery(req.body);

    const sqlResponse = await postgres.query(req.dependencies.pgPool, sqlQuery);

    if (sqlResponse.rowCount === 0) {
      throw new GenericError('There is no user with that e-mail address and password', { status: 401 });
    }

    const user = genericSingleRowSqlResponseTransform(sqlResponse);

    req.session.user = user;
    req.session.save(() => {
      res.json(user);
    });
  } catch (error) {
    next(error);
  }
}

module.exports = signIn;