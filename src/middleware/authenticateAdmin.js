function authenticateUser(req, _, next) {
  if (req.session.user.isAdmin) {
    next();
  } else {
    next(new Error('User must be an admin'));
  }
}

module.exports = authenticateUser;
