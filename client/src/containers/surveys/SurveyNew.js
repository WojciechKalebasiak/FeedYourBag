import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurverFormReview from "./SurveyFormReview";
import styles from "./SurveyNew.module.css";
class SurveyNew extends Component {
  state = { showFormReview: false };
  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurverFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div className={styles.Survey}>{this.renderContent()}</div>;
  }
}
export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
