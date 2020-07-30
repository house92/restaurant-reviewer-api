function authenticateUser(req, _, next) {
  if (req.session.user) {
    next();
  } else {
    next(new Error('User must be signed in'));
  }
}

module.exports = authenticateUser;
