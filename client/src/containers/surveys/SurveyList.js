import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";
import SurveyListItem from "./SurveyListItem";
import styles from "./SurveyList.module.css";
class SurveyList extends Component {
  componentDidMount() {
    this.props.getSurveys();
  }
  render() {
    const { surveys } = this.props;
    return (
      <ul className={styles.SurveyList}>
        {surveys.reverse().map(survey => (
          <SurveyListItem key={survey._id} survey={survey} />
        ))}
      </ul>
    );
  }
}
const mapStateToProps = ({ surveys }) => ({
  surveys
});
const mapDispatchToProps = dispatch => ({
  getSurveys: () => dispatch(fetchSurveys())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyList);
