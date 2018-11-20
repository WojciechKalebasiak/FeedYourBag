import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import LoginButtons from "./LoginButtons";
import LogoutButton from "./LogoutButton";
import Spinner from "../../components/Spinner/Spinner";
class Header extends Component {
  navbarContent() {
    switch (this.props.isAuthorized) {
      case null:
        return <Spinner style={{ height: "60px" }} />;
      case true:
        return <LogoutButton />;
      case false:
        return <LoginButtons />;
    }
  }
  render() {
    const { isAuthorized } = this.props;
    return (
      <header className={styles.Header}>
        <nav className={styles.Navigation}>
          <ul>
            <li className={styles.LogoItem}>
              <img src={logo} alt="logo" className={styles.Logo} />
            </li>
            {this.navbarContent()}
          </ul>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized
});
export default connect(mapStateToProps)(Header);
