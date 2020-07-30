const postgres = require('../../postgres');
const generateDeleteUserSqlQuery = require('../sqlQueries/generateDeleteUserSqlQuery');

async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;

    if (id !== req.session.user.id && !req.session.user.isAdmin) {
      throw new Error('Users can only delete their own accounts');
    }

    const sqlQuery = generateDeleteUserSqlQuery(id, req.session.user.id, req.session.user.isAdmin);

    await postgres.query(req.dependencies.pgPool, sqlQuery);

    // Also destroy session
    const deleteSessionSqlQuery = generateDeleteUserSqlQuery(id);

    await postgres.query(req.dependencies.pgPool, deleteSessionSqlQuery);

    res.status(200).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = deleteUser;