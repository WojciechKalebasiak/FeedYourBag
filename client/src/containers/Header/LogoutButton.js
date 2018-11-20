import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import styles from "./Header.module.css";
import buttonStyles from "./Buttons.module.css";
export default function LogoutButton() {
  return (
    <li className={styles.NavItem}>
      <Link
        to="/api/logout"
        className={classnames(
          [buttonStyles.LoginButton],
          [buttonStyles.LogoutButton]
        )}>
        Logout
      </Link>
    </li>
  );
}
