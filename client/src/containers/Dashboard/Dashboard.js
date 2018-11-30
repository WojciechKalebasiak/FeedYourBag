import React, { Component } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import SurveyList from "../surveys/SurveyList";
import styles from "./Dashboard.module.css";
class Dashboard extends Component {
  dashboardContent() {
    const { isAuthorized } = this.props;
    switch (isAuthorized) {
      case null:
        return <Spinner style={{ textAlign: "center", marginTop: "10%" }} />;
      case false:
        return <Redirect to="/" />;
      default:
        return (
          <div>
            {<SurveyList />}
            <Link to="/new-survey" className={styles.AddSurveyBtn}>
              <i className="large material-icons">add</i>
            </Link>
          </div>
        );
    }
  }
  render() {
    return <div className={styles.Dashboard}>{this.dashboardContent()}</div>;
  }
}
const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized,
  user: auth.user
});
export default withRouter(connect(mapStateToProps)(Dashboard));
