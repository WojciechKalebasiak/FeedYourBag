import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
import buttonStyles from "./Buttons.module.css";
import styles from "./Header.module.css";
export default function LoginButtons() {
  return (
    <React.Fragment>
      <li className={styles.NavItem}>
        <Link
          to="/auth/google"
          className={classnames(
            [buttonStyles.LoginButton],
            [buttonStyles.GoogleButton]
          )}>
          <img
            src={googleLogo}
            alt="google-logo"
            className={styles.socialLogo}
          />
          Login With Google
        </Link>
      </li>
      <li className={styles.NavItem}>
        <Link
          to="/auth/facebook"
          className={classnames(
            [buttonStyles.LoginButton],
            [buttonStyles.FacebookButton]
          )}>
          <img
            src={facebookLogo}
            alt="facebook-logo"
            className={styles.socialLogo}
          />
          Login With Facebook
        </Link>
      </li>
    </React.Fragment>
  );
}
