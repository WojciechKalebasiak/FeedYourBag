const router = require("express").Router();
const passport = require("passport");
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("../../api/current_user");
});
module.exports = router;
