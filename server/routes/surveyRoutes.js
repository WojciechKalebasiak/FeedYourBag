const router = require("express").Router();
const _ = require("lodash");
const { URL } = require("url");
const { Path } = require("path-parser");
const path = require("path");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Survey = require("../models/Surveys");
const Mailer = require("../services/Mailer/Mailer");
const surveyTemplate = require("../services/Mailer/emailTemplates/surveyTemplate");
router.get("/", requireLogin, async (req, res) => {
  const surveys = await Survey.find({ _owner: req.user.id }).select({
    recipients: false
  });
  res.send(surveys);
});
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
router.post("/webhooks", (req, res) => {
  const p = new Path("/api/surveys/:surveyID/:choice");
  const events = req.body.map(({ email, url }) => {
    const { pathname } = new URL(url);
    const match = p.test(pathname);
    if (match) {
      return {
        email,
        ...match
      };
    }
  });
  const filtredEvents = events.filter(event => event !== undefined);
  const uniqueEvents = _.uniqBy(filtredEvents, "email", "surveyID");
  uniqueEvents.forEach(({ surveyID, email, choice }) => {
    Survey.updateOne(
      {
        _id: surveyID,
        recipients: {
          $elemMatch: { email: email, responded: false }
        }
      },
      {
        $inc: { [choice]: 1 },
        $set: { "recipients.$.responded": true },
        lastResponded: new Date()
      }
    ).exec();
  });
  res.end();
});
router.get("/:surveyID/:choice", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "services", "Mailer", "thanks.html")
  );
});
module.exports = router;
