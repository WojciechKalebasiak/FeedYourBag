import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Home.module.css";
import classnames from "classnames";
function Home(props) {
  return (
    <div className={styles.Home}>
      {props.isAuthorized ? <Redirect to="/dashboard" /> : null}
      <h3 className={classnames([styles.Emails], "Heading")}>
        Send emails to your customers.
      </h3>
      <h3 className={classnames([styles.Feedback], "Heading")}>
        Get feedback from them.
      </h3>
      <h3 className={classnames([styles.MainHeading], "Heading")}>
        Feed Your Bag.
      </h3>
    </div>
  );
}
const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized
});
export default connect(mapStateToProps)(Home);
