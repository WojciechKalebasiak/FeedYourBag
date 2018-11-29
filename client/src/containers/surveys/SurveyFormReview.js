import React from "react";
import { connect } from "react-redux";
import styles from "./SurveyFormReview.module.css";
import buttonStyles from "./Button.module.css";
import { withRouter } from "react-router-dom";
import { sendSurvey } from "../../actions/index";
function SurveyFormReview({ onCancel, formValues, submitSurvey, history }) {
  return (
    <div>
      <h3 className={styles.Heading}>Confirm Your Survey</h3>
      <div className={styles.Wrapper}>
        <label className={styles.Label}>Survey Title</label>
        <p className={styles.Content}>{formValues.title}</p>
      </div>
      <div className={styles.Wrapper}>
        <label className={styles.Label}>Subject</label>
        <p className={styles.Content}>{formValues.subject}</p>
      </div>
      <div className={styles.Wrapper}>
        <label className={styles.Label}>Email Body</label>
        <p className={styles.Content}>{formValues.body}</p>
      </div>
      <div className={styles.Wrapper}>
        <label className={styles.Label}>Recipients List</label>
        <p className={styles.Content}>{formValues.recipients}</p>
      </div>
      <button
        onClick={onCancel}
        className={[buttonStyles.BackButton, buttonStyles.SurveyButton].join(
          " "
        )}>
        <i className="large material-icons" style={{ verticalAlign: "middle" }}>
          arrow_back
        </i>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className={[buttonStyles.SendButton, buttonStyles.SurveyButton].join(
          " "
        )}>
        Send Survey
        <i className="large material-icons" style={{ verticalAlign: "middle" }}>
          done
        </i>
      </button>
    </div>
  );
}
const mapStateToProps = ({ form }) => ({
  formValues: form.surveyForm.values
});
const mapDispatchToProps = dispatch => ({
  submitSurvey: (values, history) => dispatch(sendSurvey(values, history))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SurveyFormReview)
);
