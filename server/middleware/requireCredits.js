const requireCredits = (req, res, next) => {
  const { recipients } = req.body;
  const amountOfMails = recipients
    .split(",")
    .map(email => ({ email: email.trim() })).lenght;
  if (req.user.credits - amountOfMails < 0) {
    return res.status(402).send({ error: "Not enough credits!" });
  }
  next();
};
module.exports = requireCredits;
