const router = require("express").Router();
const passport = require("passport");

router.get("/current_user", (req, res) => {
  res.send(req.user);
});
router.get("/logout", (req, res) => {
  req.logout();
  if (!req.user) {
    res.redirect("../../");
  }
});
router.get("/", (req, res) => {
  res.send({ Api: true });
});
module.exports = router;
