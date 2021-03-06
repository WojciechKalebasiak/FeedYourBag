import React from "react";
import classnames from "classnames";
import Payments from "../Payments/Payments";
import styles from "../Header.module.css";
import buttonStyles from "./Buttons.module.css";
import googleLogo from "../../../assets/google-logo.png";
import facebookLogo from "../../../assets/facebook-logo.png";
export default function LoggedButton(props) {
  const { user } = props;
  const credits = user.credits;
  return (
    <React.Fragment>
      <li className={styles.UserItem}>
        {user.googleID ? (
          <img
            src={user.avatar ? user.avatar : googleLogo}
            alt="avatar"
            className={styles.Avatar}
          />
        ) : (
          <img
            src={user.avatar ? user.avatar : facebookLogo}
            alt="avatar"
            className={styles.Avatar}
          />
        )}
        <span className={styles.Username}>
          <strong>{user.googleID ? user.email : user.name}</strong>
        </span>
      </li>
      <li className={[styles.AddCreditsItem]}>
        <Payments />
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
