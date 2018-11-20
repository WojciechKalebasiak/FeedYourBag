import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
import styles from "./Header.module.css";
import classnames from 'classnames';
class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <nav class={styles.Navigation}>
          <ul>
            <li className={styles.LogoItem}>
              <img src={logo} alt="logo" className={styles.Logo} />
            </li>
            <li className={styles.NavItem}>
              <a href="/auth/google" className={classnames([styles.LoginButton], [styles.GoogleButton])}>
                <img
                  src={googleLogo}
                  alt="google-logo"
                  className={styles.socialLogo}
                />
                Login With Google
              </a>
            </li>
            <li className={styles.NavItem}>
              <a href="/auth/facebook" className={classnames([styles.LoginButton], [styles.FacebookButton])}>
                <img
                  src={facebookLogo}
                  alt="facebook-logo"
                  className={styles.socialLogo}
                />
                Login With Facebook
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
