import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import buttonStyles from "./Button.module.css";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
class SurveyForm extends Component {
  renderFields() {
    return (
      <React.Fragment>
        <Field
          label="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Subject Line"
          type="text"
          name="subject"
          component={SurveyField}
        />
        <Field
          label="Email Body"
          type="text"
          name="body"
          component={SurveyField}
        />
        <Field
          label="Recipients List"
          type="text"
          name="recipients"
          component={SurveyField}
        />
      </React.Fragment>
    );
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link to="/dashboard">
          <button
            type="submit"
            className={[
              buttonStyles.SurveyButton,
              buttonStyles.CancelButton
            ].join(" ")}>
            Canecel{" "}
            <i
              className="large material-icons"
              style={{ verticalAlign: "middle" }}>
              close
            </i>
          </button>
        </Link>
        <button
          type="submit"
          className={[buttonStyles.SurveyButton, buttonStyles.NextButton].join(
            " "
          )}>
          Next{" "}
          <i
            className="large material-icons"
            style={{ verticalAlign: "middle" }}>
            arrow_forward
          </i>
        </button>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide a body";
  }
  errors.recipients = validateEmails(values.recipients || "");
  if (!values.recipients) {
    errors.recipients = "You must provide an emails";
  }
  return errors;
};
export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false
})(SurveyForm);
