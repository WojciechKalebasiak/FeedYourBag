const router = require("express").Router();
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middleware/requireLogin");
router.get("/current_user", (req, res) => {
  res.send(req.user);
});
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
router.post("/payment", requireLogin, async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      amount: 1000,
      currency: "usd",
      description: "5000 credits for 10$",
      source: req.body.id
    });
  } catch (e) {
    return res.status(401).send({ error: "Something went wrong." });
  }
  req.user.credits += 5000;
  const updatedUser = await req.user.save();
  res.send(updatedUser);
});
//Survey routes
const surveyRoutes = require("./surveyRoutes");
router.use("/surveys", surveyRoutes);
module.exports = router;
