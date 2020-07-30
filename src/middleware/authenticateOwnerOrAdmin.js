function authenticateOwnerOrAdmin(req, _, next) {
  if (req.session.user.isOwner || req.session.user.isAdmin) {
    next();
  } else {
    next(new Error('User must be registered as an owner'));
  }
}

module.exports = authenticateOwnerOrAdmin;
