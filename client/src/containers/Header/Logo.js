import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/logo.svg";
function Logo(props) {
  return (
    <Link to={props.isAuthorized ? "/dashboard" : "/"}>
      <img src={logo} alt="logo" className={styles.Logo} />
    </Link>
  );
}
const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized
});
export default connect(mapStateToProps)(Logo);
