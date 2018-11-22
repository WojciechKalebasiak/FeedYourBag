import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import Logo from "./Logo";
import styles from "./Header.module.css";
import LoginButtons from "./LoginButtons";
import LoggedButtons from "./LoggedButtons";
import Spinner from "../../components/Spinner/Spinner";
class Header extends Component {
  navbarContent() {
    const { user, isAuthorized } = this.props.auth;
    switch (isAuthorized) {
      case null:
        return <Spinner style={{ height: "60px", marginLeft: "auto" }} />;
      case true:
        return <LoggedButtons user={user} />;
      default:
        return <LoginButtons />;
    }
  }
  render() {
    const { isAuthorized } = this.props.auth;
    return (
      <header className={styles.Header}>
        <nav
          className={classnames([styles.Navigation], {
            [styles.AuthorizedNavigation]: isAuthorized
          })}>
          <ul>
            <li className={styles.LogoItem}>
              <Logo />
            </li>
            {this.navbarContent()}
          </ul>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth
});
export default connect(mapStateToProps)(Header);
