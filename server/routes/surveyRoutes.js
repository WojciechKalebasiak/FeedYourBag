const router = require("express").Router();
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Survey = require("../models/Surveys");
const Mailer = require("../services/Mailer/Mailer");
const surveyTemplate = require("../services/Mailer/emailTemplates/surveyTemplate");
router.post("/new", requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;
  const { amountOfMails } = res.locals;
  const recipientsList = recipients
    .split(",")
    .map(email => ({ email: email.trim() }));
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipientsList,
    _owner: req.user.id,
    created: Date.now()
  });
  const mailer = new Mailer(survey, surveyTemplate(survey));
  try {
    await mailer.send();
    await survey.save();
    req.user.credits -= recipientsList.length;
    const user = await req.user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
