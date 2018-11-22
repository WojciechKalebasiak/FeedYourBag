import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import buttonStyles from "./Buttons.module.css";
import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
export default function LoggedButton(props) {
  const { user, credits } = props;
  return (
    <React.Fragment>
      <li className={styles.UserItem}>
        <span className={styles.Username}>
          Signed as <strong>{user.name}</strong>
        </span>
        {user.googleID ? (
          <img
            src={googleLogo}
            alt="google-logo"
            style={{
              width: "25px",
              height: "25px",
              verticalAlign: "middle",
              marginLeft: "5px"
            }}
          />
        ) : (
          <img
            src={facebookLogo}
            alt="facebook-logo"
            style={{
              width: "25px",
              height: "25px",
              verticalAlign: "middle",
              marginLeft: "5px"
            }}
          />
        )}
      </li>
      <li className={[styles.AddCreditsItem]}>
        <Link
          to="/add-credits"
          className={classnames(
            [buttonStyles.NavButton],
            [buttonStyles.AddCreditsButton]
          )}>
          Add Credits
        </Link>
      </li>
      <li className={styles.CreditsItem}>Credits: {credits}</li>
      <li className={styles.LogoutItem}>
        <a
          href="/api/logout"
          className={classnames(
            [buttonStyles.NavButton],
            [buttonStyles.LogoutButton]
          )}>
          Logout
        </a>
      </li>
    </React.Fragment>
  );
}
