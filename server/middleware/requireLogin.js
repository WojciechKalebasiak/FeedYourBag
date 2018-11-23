const requireLogin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must be logged to do this." });
  }
  next();
};
module.exports = requireLogin;
