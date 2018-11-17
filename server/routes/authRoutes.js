const router = require("express").Router();
const passport = require("passport");
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("../../api/current_user");
});
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile", "email"] })
);
router.get("/facebook/callback", passport.authenticate("facebook"), (req, res) => {
  res.redirect("../../api/current_user");
});
module.exports = router;
