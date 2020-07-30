async function signOut(req, res, next) {
  try {
    await req.session.destroy();
    res.clearCookie('connect.sid', { path: '/' }).status(200).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = signOut;