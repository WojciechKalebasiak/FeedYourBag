import React from "react";
import classnames from "classnames";
import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
import buttonStyles from "./Buttons.module.css";
import styles from "./Header.module.css";
export default function LoginButtons() {
  return (
    <React.Fragment>
      <li className={styles.LoginItem}>
        <a
          href="/auth/google"
          className={classnames(
            [buttonStyles.NavButton],
            [buttonStyles.GoogleButton]
          )}>
          <img
            src={googleLogo}
            alt="google-logo"
            className={buttonStyles.socialLogo}
          />
          Login With Google
        </a>
      </li>
      <li className={styles.LoginItem}>
        <a
          href="/auth/facebook"
          className={classnames(
            [buttonStyles.NavButton],
            [buttonStyles.FacebookButton]
          )}>
          <img
            src={facebookLogo}
            alt="facebook-logo"
            className={buttonStyles.socialLogo}
          />
          Login With Facebook
        </a>
      </li>
    </React.Fragment>
  );
}
